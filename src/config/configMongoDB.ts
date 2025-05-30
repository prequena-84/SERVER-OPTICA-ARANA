import mongoose from "mongoose"
import path from 'path'

require('dotenv').config({ path: path.resolve(__dirname,'../../.env') })

const uriMongoDB = `mongodb+srv://${process.env.USER_MONGODB}:${process.env.KEY_MONGODB}@${process.env.CLOUSTER_OPERATIONS}${process.env.URI_MONGO}${process.env.CLOUSTER_OPERATIONS}`

const connectDB = async ():Promise<void> => {
    try {
        await mongoose.connect(uriMongoDB)
    } catch(err) {
        console.log('Error al intentar de conectarse a Mongoose: ', err )
        process.exit(1); // Salir del proceso en caso de error
    }
}

export {
    mongoose,
    connectDB,
}