import { Schema, model } from "mongoose"

const permissionsSchema = new Schema({
    can_send_messages: { type: Boolean },
    can_send_media_messages: { type: Boolean },
    can_send_audios: { type: Boolean },
    can_send_documents: { type: Boolean },
    can_send_photos: { type: Boolean },
    can_send_videos: { type: Boolean },
    can_send_video_notes: { type: Boolean },
    can_send_voice_notes: { type: Boolean },
    can_send_polls: { type: Boolean },
    can_send_other_messages: { type: Boolean },
    can_add_web_page_previews: { type: Boolean },
    can_change_info: { type: Boolean },
    can_invite_users: { type: Boolean },
    can_pin_messages: { type: Boolean },
    can_manage_topics: { type: Boolean }
})

const photoSchema = new Schema({
    small_file_id: { type: String },
    small_file_unique_id: { type: String },
    big_file_id: { type: String },
    big_file_unique_id: { type: String }
})

const chatSchema = new Schema({
    id: {
        type: String
    },
    title: {
        type: String
    },
    is_forum: {
        type: Boolean
    },
    type: {
        type: String
    },
    has_visible_history: {
        type: Boolean
    },
    permissions: permissionsSchema,
    join_to_send_messages: {
        type: Boolean
    },
    photo: photoSchema
})

const Chat = model('Chat', chatSchema)

export default Chat