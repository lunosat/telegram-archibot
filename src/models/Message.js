import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    message_id: {
        type: String
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    chat: {
        type: Schema.Types.ObjectId,
        ref: 'Chat'
    }
})

const Message = ('Message', messageSchema)

export default Message