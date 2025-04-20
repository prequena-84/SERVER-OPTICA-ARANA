import ISR from '../class/class-router'
import reportCliente from '../modules/query/client-report'

import type { IRequest,IResponse } from 'types/TRouter'

const CR = new ISR(), Router = CR.Router()

export default Router.get('/', async(
    req:IRequest, 
    res:IResponse
):Promise<void> => {
    try {
        const report = await reportCliente()

        res.status(200).send({
            data:report,
            message:'Se descargo los del reporte de cliente sastifactoriamente los datos',
        })
    } catch (err) {
        res.status(500).send({
            data:null,
            message:`Error en la descarga de datos de los cliente: ${err}`,
        })
    }
})