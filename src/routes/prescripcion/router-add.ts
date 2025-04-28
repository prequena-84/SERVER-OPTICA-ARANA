import bodyParser from "body-parser"
import ISR from '../../class/class-router'
import prescriptionAdd from '../../modules/insert/prescription-insert'

import type { IPrescription } from "interfaces/Iprescription"
import type { IRequest,IResponse } from 'types/TRouter'

const CR = new ISR(), Router = CR.Router()

Router.use(bodyParser.json())

Router.post('/', async ( req:IRequest, res:IResponse ): Promise<void> => {
    try {
        const data:IPrescription = req.body, respPrescription = await prescriptionAdd(data)

        res.status(200).send({
            data:respPrescription.data,
            message: respPrescription.message,
        })
    } catch(err) {

        res.status(500).send({
            data:null,
            message:`Error en el registro de datos: ${err}`,
        })
    }
})

export default Router