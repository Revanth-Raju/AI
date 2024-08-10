import mongoose from "mongoose";
import { randomUUID } from "crypto"

// ChatSchema functionality.
const chatSchema = new mongoose.Schema({
    id:{
        type: String,
        default:randomUUID,
    },
    role:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
});

// userSchema functionality.
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    chats: [chatSchema],
});

export default mongoose.model("user", userSchema);