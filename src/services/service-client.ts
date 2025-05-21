// Importación de class Router y Servidor
import ISR from '../class/class-router'

// Servicios VRouter Servicios
import CUSTOMER_ADD from '../routes/cliente/router-add'
import CUSTOMER_UPDATE from '../routes/cliente/router-modify'
import CUSTOMER_DELETE from '../routes/cliente/router-delete'
import CUSTOMER_DOWNLOAD from '../routes/cliente/router-modify'
import CUSTOMER_REPORT from '../routes/router-report'

// Importación de tipos
import type { TRequest,TResponse } from 'types/TRouter'

// Instancia de la clase Servido y Router
const CR = new ISR(), Router = CR.Router()

// Importación de la descripcion del servicio
Router.get('/', async( _req:TRequest, res:TResponse ): Promise<void> => {
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

Router.get('/insert', CUSTOMER_ADD)
Router.get('/update', CUSTOMER_UPDATE)
Router.get('/delete', CUSTOMER_DELETE)
Router.get('/download', CUSTOMER_DOWNLOAD)
Router.get('/report', CUSTOMER_REPORT)

export default Router