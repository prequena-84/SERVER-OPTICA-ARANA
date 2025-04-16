import bodyParse from 'body-parser'
import { VRouter } from '../interfaces/IRouter'
import getClient from '../modules/update/client-update'

import type { IClient } from 'interfaces/Iclient'
import type { IRequest,IResponse } from 'types/TRouter'

VRouter.use(bodyParse.json())

VRouter.get('/', async (req:IRequest,res:IResponse):Promise<void> => {
    try {
        res.status(200).send({
            message:'Servicio de actualización de Clientes',
        })
    } catch(err) {
        res.status(500).send({
            mensaje:`error en la actualización: ${err}`,
        })
    }
})

VRouter.post('/update', async (req:IRequest, res:IResponse):Promise<void> => {
    try {
        const 
            dataClient:IClient = req.body,
            resGetClient = await getClient(dataClient.idClient, dataClient)

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

export default VRouter;