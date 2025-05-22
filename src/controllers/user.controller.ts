import type { TRequest,TResponse } from 'types/TRouter'
import type { IUser } from 'interfaces/Iuser'

import { generateToken } from '../utils/jwt'
import ISR from '../class/class-router'
import bodyParser from 'body-parser'

const dataUsers: IUser[] = []
const CR = new ISR(), Router = CR.Router()

Router.use(bodyParser.json())

Router.post('/', ( req:TRequest, res:TResponse ) => {
    const { userName, Password } = req.body

    console.log('Usuario:', userName)
    console.log('Password:',Password)

    if ( !userName || !Password ) {
        res.status(400).json({ message: 'Datos incompletos' })
    }

    dataUsers.push({ userName, Password })
    const token = generateToken(userName)

    console.log('Nuevo Token creado:', token)
    
    res.status(201).json({ message: 'Usuario creado', token })
})

export default Router