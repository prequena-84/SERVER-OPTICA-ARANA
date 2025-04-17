import bodyParse from 'body-parser'
import ISR from '../../class/class-router'
import Client from '../../db/models/client'

import type { IRequest,IResponse } from 'types/TRouter'

const CR = new ISR(), Router = CR.Router()

Router.use(bodyParse.json())

/*Router.get('/', async(req:IRequest,res:IResponse): Promise<void> => {
    try {
        res.status(200).send({
            message:'Servicio para descargar los datos del Clientes',
        })
    } catch(err) {
        res.status(500).send({
            mensaje:`error en la actualización: ${err}`,
        })
    }
})*/

Router.get('/', async(req:IRequest, res:IResponse):Promise<void> => {
    try {
        const AllClient = await Client.allClient()

        res.status(200).send({
            data:AllClient,
            message:'Se descargo sastifactoriamente los datos',
        })
    } catch (err) {

        res.status(500).send({
            data:null,
            message:`Error en la descarga de datos de los cliente: ${err}`,
        })
    }
})

export default Router