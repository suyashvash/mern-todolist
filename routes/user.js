import { Router } from 'express'
import User from '../models/user.model';

const userRouter = Router();

userRouter.route('/signup').get((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const newUser = new Task({ username, password });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

userRouter.route('/login').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.find({ username: username, password: password })
        .then((user) => { res.json({ status: true, message: "User found !", token: user[0].id, loggedIn: true }) })
        .catch(err => res.json({ status: false, message: "User not found !", log: "Please check username or password", loggedIn: false }));
})

export default userRouter;