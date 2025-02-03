import { bot } from '../index.js'

const handler = async (ctx) => {

    const button = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Adicionar ao grupo',
                        url: `https://t.me/${process.env.BOT_USERNAME}?startgroup=true`
                    }
                ]
            ]
        }
    }
    await bot.sendMessage(ctx.from.id, 'Over here, stranger.', button)
}

handler.command = /^\/start$/

export default handler
