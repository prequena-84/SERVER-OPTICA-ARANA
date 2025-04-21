import bodyParser from "body-parser"
import ISR from '../../class/class-router'
import Prescription from '../../db/models/prescription'

import type { IRequest, IResponse } from 'types/TRouter'

const CR = new ISR(), Router = CR.Router()

Router.use(bodyParser.json())

Router.get('/', async(req:IRequest, res:IResponse): Promise<void> => {
    try {
        const allPrescriptions = await Prescription.allPrescriptions()

        res.status(200).send({
            data:allPrescriptions,
            message:'Se descargo sastifactoriamente los datos',
        })
    } catch(err) {
        res.status(500).send({
            data:null,
            message:`Error en la descarga de datos: ${err}`,
        })
    }
})

export default Router