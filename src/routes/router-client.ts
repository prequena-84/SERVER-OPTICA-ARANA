import bodyParse from 'body-parser'
import { VRouter } from '../interfaces/IRouter'
import ClientAdd from  '../modules/insert/client-insert'

import type { IClient } from 'interfaces/Iclient'
import type { IRequest,IResponse } from 'types/TRouter'

VRouter.use(bodyParse.json())

VRouter.get('/', async(req:IRequest,res:IResponse):Promise<void> => {
    try {
        res.status(200).send({
            message:'Servicio de Registro de Clientes',
        })
    } catch (err) {
        res.status(500).send({
            mensaje:`error en la peticion: ${err}`,
        })
    }
}) 

VRouter.post('/registration', async (req:IRequest, res:IResponse):Promise<void> => {
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

export default VRouter