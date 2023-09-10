import { Router } from "express";
import Task from "../models/task.model.js";

const taskRouter = Router();

taskRouter.route("/").get((req, res) => {
  const authHeader = req.get("UserId");

  Task.find({ createdBy: authHeader })
    .then((task) => {
      res.json(task);
    })
    .catch((err) => res.status(400).json("Error: ", +err));
});

taskRouter.route("/add").post((req, res) => {
  const title = req.body.title;
  const assignedTo = req.body.assignedTo;
  const priority = req.body.priority;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const completed = req.body.completed;
  const description = req.body.description;
  const status = req.body.status;
  const createdBy = req.body.createdBy;

  const newTask = new Task({
    title,
    description,
    date,
    assignedTo,
    priority,
    duration,
    completed,
    status,
    createdBy,
  });

  newTask
    .save()
    .then(() => res.json("Task added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

taskRouter.route("/getTask/:id").get((req, res) => {
  const authHeader = req.get("UserId");
  Task.find({ _id: req.params.id, createdBy: authHeader })
    .then((task) => {
      res.json(task);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

taskRouter.route("/delete/:id").delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json("Task Deleted"))
    .catch((err) => res.status(400).json("Error: - " + err));
});

taskRouter.route("/update/:id").put((req, res) => {
  const authHeader = req.get("UserId");
  Task.find({ _id: req.params.id, createdBy: authHeader })
    .then((task) => {
      task.title = req.body.title;
      task.description = req.body.description;
      task.date = Date.parse(req.body.date);
      task.assignedTo = req.body.assignedTo;
      task.priority = req.body.priority;
      task.duration = Number(req.body.duration);
      task.completed = req.body.completed;
      task.status = req.body.status;

      task
        .save()
        .then(() => res.json("Task updated!"))
        .catch((err) => res.status(400).json("Error: -" + err));
    })
    .catch((err) => res.status(400).json("Error- " + err));
});

taskRouter.route("/filter/dateRange").get((req, res) => {
  const authHeader = req.get("UserId");
  const status = req.body.status;
  const priority = req.body.priority;
  const assignedTo = req.body.assignedTo;
  Task.find({
    priority,
    assignedTo,
    status,
    createdBy: authHeader,
    date: { $lte: Date.parse(req.body.to), $gte: Date.parse(req.body.from) },
  })
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json("Error: ", +err));
});

taskRouter.route("/filter").get((req, res) => {
  const status = req.body.status;
  const priority = req.body.priority;
  const assignedTo = req.body.assignedTo;
  const date = req.body.date;
  const authHeader = req.get("UserId");

  Task.find({
    priority,
    assignedTo,
    date,
    status: status,
    createdBy: authHeader,
    date: Date.parse(date),
  })
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json("Error: ", +err));
});

export default taskRouter;
