import ISR from './class/class-router'
import cors from 'cors'
import { PORT } from './config/config-app'

import type { IRequest, IResponse } from 'types/TRouter' 

// Importación Servicios del modulo de Cliente
import CUSTOMER from './services/service-client'

const CS = new ISR()
const servidor = CS.Servidor()

servidor.use(cors())

servidor.all('/', (req:IRequest, res:IResponse ) => {
    res.send('Bienvenido a la API de Servicios de Optica ARANA')
})

servidor.use("/api-customer", CUSTOMER)


servidor.listen(PORT, () => console.log(`Servidor corriendo en: http://localhost:${PORT}`))