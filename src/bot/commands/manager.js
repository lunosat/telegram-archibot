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
            const commandModule = await import(path.join(__dirname, command));
           
            const handler = commandModule.default || commandModule.handler || commandModule;

            if (!(handler.command instanceof RegExp)) {
                console.warn(`O comando definido em ${command} não possui uma expressão regular válida.`);
                continue;
            }

            bot.onText(handler.command, handler);

            console.log(`Command loaded: ${command}`)
        } catch (error) {
            console.error(`Error on load command: ${command}`)
        }
    }
}

export default registerCommands