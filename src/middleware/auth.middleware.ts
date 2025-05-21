import type { TRequest,TResponse,TNextFunction } from 'types/TRouter'
import { validateToken } from '../utils/jwt'

const authMiddleware = ( req:TRequest, res:TResponse, next:TNextFunction ) => {
    const authHeader = req.headers.authorization

    if (!authHeader ) return res.status(401).json({ message: 'Token requerido' }) 
    
    const token = authHeader.split(' ')[1]

    try {
        // corregir esta sintaxis
        validateToken(token)
        next()

        //quede aqui
    } catch( err ) {
        res.status(403).json({mesaage: 'Token inválido'})
    }
};