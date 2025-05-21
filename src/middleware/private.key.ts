import crypto from 'crypto'

export default function keyJWT(): string {
    return crypto.randomBytes(64).toString('hex')
}