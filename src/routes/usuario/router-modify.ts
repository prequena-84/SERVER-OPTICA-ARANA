import bodyParse from 'body-parser'
import ISR from '../../class/class-router'
import getUser from '../../modules/modify/user-update'

import type { IUser } from 'interfaces/Iuser'
import type { IRequest, IResponse } from 'types/TRouter'

const CR = new ISR(), Router = CR.Router()

Router.use(bodyParse.json())

Router.post('/:id', async(req:IRequest, res:IResponse):Promise<void> => {
    try {
        const 
            data:IUser = req.body,
            GetUser = await getUser(Number(req.params.id), data)

        res.status(200).send({
            data:GetUser.data,
            message:GetUser.message,
        })
    } catch(err) {

        res.status(500).send({
            data:null,
            message:`Error en la actualización de datos del Usuario: ${err}`,
        })
    }
})

export default Router