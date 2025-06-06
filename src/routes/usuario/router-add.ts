import bodyParser from 'body-parser'
import ISR from '../../class/class-router'
import userAdd from '../../modules/insert/user-insert'

import type { IUser } from 'interfaces/Iuser'
import type { TRequest, TResponse } from 'types/TRouter'

const CR = new ISR(), Router = CR.Router()

Router.use(bodyParser.json())

Router.post('/', async ( req:TRequest, res:TResponse ): Promise<void> => {
    try {
        const data:IUser = req.body.dataUser, respUser = await userAdd(data)

        res.status(200).send({
            data:respUser.data,
            message: respUser.message,
        })
    } catch(err) {
        res.status(500).send({
            data:null,
            message:`Error en el registro de datos: ${err}`,
        })
    }
})

export default Router