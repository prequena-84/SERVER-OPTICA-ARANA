import bodyParser from "body-parser"
import ISR from '../../class/class-router'
import deleteUser from '../../modules/delete/user-delete'

import type { TRequest,TResponse } from 'types/TRouter'

const CR = new ISR(), Router = CR.Router()

Router.use(bodyParser.json())

Router.delete('/:id', async( req:TRequest, res:TResponse ): Promise<void> => { 
    try {
        const respDelete = await deleteUser(Number(req.params.id))

        res.status(200).send({
            data:respDelete.data,
            message:respDelete.message,
        })
    } catch(err) {
        res.status(500).send({
            data:null,
            message:`Error en la descarga de datos: ${err}`,
        })
    }
})

export default Router