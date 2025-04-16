import { VRouter } from 'interfaces/IRouter'
import bodyParse from 'body-parser'
import ClientAdd from 'modules/insert/client-insert'

import type { IClient } from 'interfaces/Iclient'
import type { IRequest,IResponse } from 'types/TRouter'

VRouter.use(bodyParse.json())

VRouter.get('/', async(req:IRequest,res:IResponse):Promise<void> => {
    try {
        res.status(200).send({
            message:'Servicio de Registro de Clientes',
        })
    } catch (err) {
        res.status(500).send({
            mensaje:`error en la peticion: ${err}`,
        })
    }
}) 

VRouter.post('/registration', async (req:IRequest, res:IResponse):Promise<void> => {

    const 
        data = req.body,
        dataClient = {
            data.idClient, 
            data.name, 
            data.lastName, 
            data.document, 
            data.nationality, 
            data.passport, 
            data.RIF, 
            data.age, 
            data.address,   
            data.mail,
            data.whastApp, 
            data.userName, 
            data.password, 
        },
        respClient = await ClientAdd(dataClient)

    // Quede pendiente en aprender como pasar el tipo al metodo ClientAdd

})