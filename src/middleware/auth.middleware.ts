import type { TRequest,TResponse,TNextFunction } from 'types/TRouter'
import { validateToken } from '../utils/jwt'

const verifyJWT  = ( req:TRequest, res:TResponse, next:TNextFunction ) => {
    const authHeader = req.headers.authorization

    if (!authHeader ) return res.status(401).json({ message: 'Token requerido' }) 
    
    const token = authHeader.split(' ')[1]
    const userName = validateToken(token)
    if(!userName) return res.status(403).json({ message: 'Token inválido' })

    next()
}

export default verifyJWT