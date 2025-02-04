import { Schema, model } from "mongoose";

const userSchema = new Schema({
    telegramId: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enums: ['user', 'admin'],
        default: 'user'
    }
})

const User = model('USer', userSchema)

export default User