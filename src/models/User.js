import { Schema, model } from "mongoose";

const userSchema = new Schema({
    id: {
        type: String
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    language_code: {
        type: String
    },
    is_premium: {
        type: Boolean
    },
    role: {
        type: String,
        enums: ['user', 'admin'],
        default: 'user'
    }
})

const User = model('USer', userSchema)

export default User