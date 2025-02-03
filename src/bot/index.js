import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv"
import registerEvents from "./events/manager.js";
import registerCommands from "./commands/manager.js";

dotenv.config()

const token = process.env.TG_TOKEN

let bot;

const initBot = async () => {
    try {
        bot = new TelegramBot(token, {polling: true});

        /* bot.onText('/start', (msg) => {
            console.log(msg)
        }) */

        await registerEvents()
        await registerCommands(bot)
        
    } catch (error) {
        
    }
}

export { initBot, bot }