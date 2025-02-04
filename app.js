import { initBot } from "./src/bot/index.js";
import connect from "./src/config/database.js";

const start = async () => {
    try {
        console.log('Initializing system...')
        await connect()
        initBot()
    } catch (error) {
        console.log(error)
    }
}

start()