import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import keyJWT from '../functions/private.key'

const secreKey = process.env.secretKey || keyJWT()

const generateToken = (userId:string): string => {
    const options: SignOptions = { expiresIn: '10m' } // Token expiration time 30 min
    return jwt.sign({ userId }, secreKey, options)
}

const validateToken = (token:string): string | JwtPayload | null => {
    try {
        const decoded = jwt.verify(token, secreKey) as JwtPayload
        return decoded.userId
    } catch( err ) {
        return null //Token invalido
    }
}

export {
    generateToken,
    validateToken,
}