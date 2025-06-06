import { connectDB,mongoose } from "../../config/configMongoDB"
import bodyParser from "body-parser"
import ISR from '../../class/class-router'
import User from '../../db/models/user'
import verifyJWT from "../../middleware/auth.middleware"
 
import type { TRequest, TResponse } from 'types/TRouter'

const CR = new ISR(), Router = CR.Router()

Router.use(bodyParser.json())

Router.get('/', verifyJWT, async ( _req:TRequest, res:TResponse ): Promise<void> => {
    try {

        await connectDB()
        const allUser = await User.allUser()

        res.status(200).send({
            data:allUser,
            message:'Se descargo sastifactoriamente los datos',
        })
    } catch(err) {
        res.status(500).send({
            data:null,
            message:`Error en la descarga de datos: ${err}`,
        })
    } finally {
        mongoose.connection.close()
    }
})

export default Router