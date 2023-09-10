import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User