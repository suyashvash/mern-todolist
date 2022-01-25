import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Number, required: true },
    assignedTo: { type: String, required: true },
    priority: { type: String, required: true },
    duration: { type: Number, required: true },
    completed: { type: Boolean, required: true },

}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);
export default Task