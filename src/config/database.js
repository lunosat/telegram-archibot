import mongoose from "mongoose";

const dbUri = process.env.DB_URI

const connect = async () => {
    try {
        console.log('Connecting database...')
        await mongoose.connect(dbUri)
        console.log('Database connected')
    } catch (error) {
        console.log(`Error on database connection: ${error.message}`)
        process.exit(1)
    }
}

export default connect