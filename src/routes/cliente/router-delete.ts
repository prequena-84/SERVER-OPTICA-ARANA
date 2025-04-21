import bodyParser from 'body-parser'
import ISR from '../../class/class-router'
import deleteClient from '../../modules/delete/client-delete'

import type { IClient } from 'interfaces/Iclient'
import type { IRequest,IResponse } from 'types/TRouter'

const CR = new ISR(), Router = CR.Router()

Router.use(bodyParser.json())

Router.delete('/:id', async(req:IRequest, res:IResponse):Promise<void> => {
    try {
        const respDeleteClient = await deleteClient(Number(req.params.id))

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