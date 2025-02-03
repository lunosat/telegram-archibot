import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const registerCommands = async (bot) => {
    let commands = fs.readdirSync(path.join(__dirname))

    const managerFile = commands.indexOf('manager.js')
    commands.splice(managerFile, 1)

    console.log("====== COMMANDS ======")

    for (let command of commands) {
        try {
            const commandHandler = await import(path.join(__dirname, command));

            bot.onText(commandHandler.command, commandHandler.default)
    
            console.log(`Command loaded: ${command}`)
        } catch (error) {
            console.error(`Error on load command: ${command}`)
        }
    }
}

export default registerCommands