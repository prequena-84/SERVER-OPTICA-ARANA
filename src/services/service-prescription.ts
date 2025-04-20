import ISR from '../class/class-router'

import PRESCRIPTION_ADD from '../routes/prescripcion/router-add'
import PRESCRIPTION_MODIFY from '../routes/prescripcion/router-modify'
import PRESCRIPTION_DELETE from '../routes/prescripcion/router-delete'
import PRESCRIPTION_DOWNLOAD from '../routes/prescripcion/router-download'

import type { IRequest,IResponse } from 'types/TRouter'

const CR = new ISR(), Router = CR.Router()

Router.get('/', async(req:IRequest,res:IResponse):Promise<void> => {
    try {
        res.status(200).send({
            message:'Bienvenido al Servicio de Prescripción',
        })
    } catch (err) {
        res.status(500).send({
            mensaje:`error en la peticion: ${err}`,
        })
    }
})

Router.get('/insert', PRESCRIPTION_ADD)
Router.get('/update', PRESCRIPTION_MODIFY)
Router.get('/delete', PRESCRIPTION_DELETE)
Router.get('/download', PRESCRIPTION_DOWNLOAD)

export default Router