import { bot } from "../index.js"

const handler = async (e) => {
    const { chat, from, new_chat_participant } = e

    if(new_chat_participant?.username === process.env.BOT_USERNAME){
        const chatData = await bot.getChat(chat.id)
        console.log(chatData)
    }
}

handler.event = 'message'

export default handler