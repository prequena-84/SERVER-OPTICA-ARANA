import bodyParser from 'body-parser'
import ISR from '../../class/class-router'
import getClient from '../../modules/modify/client-update'

import type { IClient } from 'interfaces/Iclient'
import type { TRequest,TResponse } from 'types/TRouter'

const CR = new ISR(), Router = CR.Router()

Router.use(bodyParser.json())

Router.post('/:id', async ( req:TRequest, res:TResponse ): Promise<void> => {
    try {
        const 
            dataClient:IClient = req.body,
            resGetClient = await getClient(Number(req.params.id), dataClient)

        res.status(200).send({
            data:resGetClient.data,
            message: resGetClient.message,
        })
    } catch(err) {
        
        res.status(500).send({
            data:null,
            message:`Error en la actualización de datos del cliente: ${err}`,
        })
    }
})

export default Router;