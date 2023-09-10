import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import taskRouter from './routes/task.js'
import userRouter from './routes/user.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true })

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established sucessfully !");
})

app.use('/api/tasks', taskRouter);
app.use('/api/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

