import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    fname: {
        type: String,
        required: [true, "Please enter your first name"],
    },
    lname: {
        type: String,
        required: [true, "Please enter your last name"],
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = models.User || model("User", UserSchema)


export default User;