import bodyParser from 'body-parser'
import ISR from '../../class/class-router'
import ClientAdd from  '../../modules/insert/client-insert'

import type { IClient } from 'interfaces/Iclient'
import type { TRequest,TResponse } from 'types/TRouter'

const CR = new ISR(), Router = CR.Router()

Router.use(bodyParser.json())

Router.post('/', async ( req:TRequest, res:TResponse ): Promise<void> => {
    try {
        const dataClient:IClient = req.body, respClient = await ClientAdd(dataClient)

        res.status(200).send({
            data:respClient.data,
            message: respClient.message,
        })
    } catch(err) {
        res.status(500).send({
            data:null,
            message:`Error en el registro de datos: ${err}`,
        })
    }
})

export default Router