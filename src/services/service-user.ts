// Importación de class Router y Servidor
import ISR from '../class/class-router'

// Servicios VRouter Servicios
import USER_ADD from '../routes/usuario/router-add'
import USER_UPDATE from '../routes/usuario/router-modify'
import USER_DELETE from '../routes/usuario/router-delete'
import USER_DOWNLOAD from '../routes/usuario/router-download'

// Importación de tipos
import type { IRequest,IResponse } from 'types/TRouter'

// Instancia de la clase Servido y Router
const CR = new ISR(), Router = CR.Router()

// Importación de la descripcion del servicio
Router.get('/', async(req:IRequest,res:IResponse):Promise<void> => {
    try {
        res.status(200).send({
            message:'Bienvenido al Servicio de Usuario',
        })
    } catch (err) {
        res.status(500).send({
            mensaje:`error en la peticion: ${err}`,
        })
    }
}) 

Router.get('/insert', USER_ADD)
Router.get('/update', USER_UPDATE)
Router.get('/delete', USER_DELETE)
Router.get('/download', USER_DOWNLOAD)

export default Router