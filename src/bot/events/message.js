import { bot } from "../index.js"
import Chat from "../../models/Chat.js"

const handler = async (e) => {
    const { chat, from, new_chat_participant } = e

    console.log(e)

    if(new_chat_participant?.username === process.env.BOT_USERNAME){
        const chatData = await bot.getChat(chat.id)
        await Chat.create(chatData)
    }
}

handler.event = 'message'

export default handler