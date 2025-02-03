import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const registerEvents = async () => {
    let events = fs.readdirSync(path.join(__dirname))

    const managerFile = events.indexOf('manager.js')
    events.splice(managerFile, 1)

    console.log("======= EVENTS =======")

    for (let event of events) {
        try {
            await import(path.join(__dirname, event));
    
            console.log(`Event loaded: ${event}`)
        } catch (error) {
            console.error(`Error on load event: ${event}`)
        }
    }
}

export default registerEvents