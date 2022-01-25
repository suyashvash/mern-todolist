import { Router } from 'express'
import Task from '../models/task.model.js'

const taskRouter = Router();

taskRouter.route('/').get((req, res) => {
    Task.find()
        .then(task => { res.json(task) })
        .catch(err => res.status(400).json('Error: ', +err));
});


taskRouter.route('/add').post((req, res) => {
    const title = req.body.title;
    const assignedTo = req.body.assignedTo;
    const priority = req.body.priority;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const completed = req.body.completed;
    const description = req.body.description;


    const newTask = new Task({ title, description, date, assignedTo, priority, duration, completed, });

    newTask.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

taskRouter.route('/getTask/:id').get((req, res) => {
    Task.findById(req.params.id)
        .then(task => { res.json(task) })
        .catch(err => res.status(400).json('Error: ' + err))
});

taskRouter.route('/delete/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise Deleted'))
        .catch(err => res.status(400).json('Error: - ' + err))
});

taskRouter.route('/update/:id').put((req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            task.title = req.body.title;
            task.description = req.body.description;
            task.date = Date.parse(req.body.date);
            task.assignedTo = req.body.assignedTo;
            task.priority = req.body.priority;
            task.duration = Number(req.body.duration);
            task.completed = req.body.completed;

            task.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: -' + err));
        })
        .catch(err => res.status(400).json('Error- ' + err))
})



// Completed Task API

taskRouter.route('/completedTask/').get((req, res) => {
    Task.find({ completed: true })
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ', +err));
});

taskRouter.route('/completedTask/filter/date').get((req, res) => {
    Task.find({ completed: true, date: Date.parse(req.body.date) })
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ', +err));
});

taskRouter.route('/completedTask/filter/priority').get((req, res) => {
    Task.find({ completed: true, priority: req.body.priority })
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ', +err));
});

taskRouter.route('/completedTask/filter/assigned').get((req, res) => {
    Task.find({ completed: true, assignedTo: req.body.assignedTo })
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ', +err));
});

taskRouter.route('/completedTask/filter/dateRange').get((req, res) => {
    Task.find({ completed: true, date: { $lte: Date.parse(req.body.to), $gte: Date.parse(req.body.from) } })
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ', +err));
});




// Pending Task API

taskRouter.route('/pendingTask/').get((req, res) => {
    Task.find({ completed: false })
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ', +err));
});

taskRouter.route('/pendingTask/filter/date').get((req, res) => {
    Task.find({ completed: false, date: Date.parse(req.body.date) })
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ', +err));
});

taskRouter.route('/pendingTask/filter/priority').get((req, res) => {
    Task.find({ completed: false, priority: req.body.priority })
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ', +err));
});

taskRouter.route('/pendingTask/filter/assigned').get((req, res) => {
    Task.find({ completed: false, assignedTo: req.body.assignedTo })
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ', +err));
});

taskRouter.route('/pendingTask/filter/dateRange').get((req, res) => {
    Task.find({ completed: false, date: { $lte: Date.parse(req.body.to), $gte: Date.parse(req.body.from) } })
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ', +err));
});


export default taskRouter;