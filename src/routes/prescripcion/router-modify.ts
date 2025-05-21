import bodyParser from 'body-parser'
import ISR from '../../class/class-router'
import getPrescription from '../../modules/modify/prescrition-update'

import type { IPrescription } from 'interfaces/Iprescription'
import type { TRequest, TResponse } from 'types/TRouter'

const CR = new ISR(), Router = CR.Router()

Router.use(bodyParser.json())

Router.post('/:id', async( req:TRequest, res:TResponse ): Promise<void> => {
    try {
        const 
            data:IPrescription = req.body,
            GetPrescription = await getPrescription(Number(req.params.id),data)

        res.status(200).send({
            data:GetPrescription.data,
            message: GetPrescription.message,
        })
    } catch(err) {

        res.status(500).send({
            data:null,
            message:`Error en la actualización de datos del cliente: ${err}`,
        })
    }
})

export default Router