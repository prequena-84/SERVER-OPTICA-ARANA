import ISR from './class/class-router'
import cors from 'cors'
import { PORT } from './config/config-app'

import type { TRequest, TResponse } from 'types/TRouter' 

// Importación Servicios del modulo de Cliente
import CUSTOMER from './services/service-client'
import PRESCRIPTION from './services/service-prescription'
import USER from './services/service-user'

// Importación de la funcion que genera la key de prueba
import keyJWT from './functions/private.key'

const CS = new ISR()
const servidor = CS.Servidor()

servidor.use( cors() )

servidor.all( '/', ( _req:TRequest, res:TResponse ) => {
    console.log(`key=> ${keyJWT()}`)
    res.send('Bienvenido a la API de Servicios de Optica ARANA')
})

servidor.use( '/customer', CUSTOMER )
servidor.use( '/prescription', PRESCRIPTION )
servidor.use( '/user', USER )

servidor.listen( PORT, () => console.log(`Servidor corriendo en: http://localhost:${PORT}`) )