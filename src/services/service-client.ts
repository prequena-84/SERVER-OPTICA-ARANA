// Importación de class Router y Servidor
import ISR from '../class/class-router'

// Servicios VRouter Servicios
import CUSTOMER_ADD from '../routes/cliente/router-registration'
import CUSTOMER_UPDATE from '../routes/cliente/router-update'
import CUSTOMER_DELETE from '../routes/cliente/router-delete'
import CUSTOMER_DOWNLOAD from '../routes/cliente/router-update'
import CUSTOMER_REPORT from '../routes/cliente/router-report'

// Importación de tipos
import type { IRequest,IResponse } from 'types/TRouter'

// Instancia de la clase Servido y Router
const CR = new ISR(), Router = CR.Router()

// Importación de la descripcion del servicio
Router.get('/', async(req:IRequest,res:IResponse):Promise<void> => {
    try {
        res.status(200).send({
            message:'Bienvenido al Servicio de Clientes',
        })
    } catch (err) {
        res.status(500).send({
            mensaje:`error en la peticion: ${err}`,
        })
    }
}) 

Router.post('/insert', CUSTOMER_ADD)
Router.post('/update', CUSTOMER_UPDATE)
Router.post('/delete', CUSTOMER_DELETE)
Router.post('/download', CUSTOMER_DOWNLOAD)
Router.post('/report', CUSTOMER_REPORT)

export default Router