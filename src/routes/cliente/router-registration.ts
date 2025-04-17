import bodyParse from 'body-parser'
import ISR from '../../class/class-router'
import ClientAdd from  '../../modules/insert/client-insert'

import type { IClient } from 'interfaces/Iclient'
import type { IRequest,IResponse } from 'types/TRouter'

const CR = new ISR(), Router = CR.Router()

Router.use(bodyParse.json())

/*Router.get('/', async(req:IRequest,res:IResponse):Promise<void> => {
    try {
        res.status(200).send({
            message:'Servicio de Registro de Clientes',
        })
    } catch (err) {
        res.status(500).send({
            mensaje:`error en la peticion: ${err}`,
        })
    }
}) */

Router.post('/', async (req:IRequest, res:IResponse):Promise<void> => {
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