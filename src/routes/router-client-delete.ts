import bodyParse from 'body-parser'
import ISR from '../class/class-router'
import deleteClient from '../modules/delete/client-delete'

import type { IClient } from 'interfaces/Iclient'
import type { IRequest,IResponse } from 'types/TRouter'

const CR = new ISR(), Router = CR.Router()

Router.use(bodyParse.json())

Router.get('/', async(req:IRequest,res:IResponse): Promise<void> => {
    try {
        res.status(200).send({
            message:'Servicio para eliminar Clientes',
        })
    } catch(err) {
        res.status(500).send({
            mensaje:`error en la actualización: ${err}`,
        })
    }
})

Router.get('/delete', async(req:IRequest, res:IResponse):Promise<void> => {
    try {

        const 
            dataClient:IClient = req.body,
            respDeleteClient = await deleteClient(dataClient.idClient)

        res.status(200).send({
            data:respDeleteClient.data,
            message:respDeleteClient.message,
        })
    } catch (err) {

        res.status(500).send({
            data:null,
            message:`Error en la descarga de datos de los cliente: ${err}`,
        })
    }
})

export default Router