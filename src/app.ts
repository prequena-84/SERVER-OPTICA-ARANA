import { servidor } from './interfaces/IRouter'
import cors from 'cors'
import { PORT } from './config/config-app'

import type { IRequest, IResponse } from 'types/TRouter' //'./types/TRouter'

// Importación Servicios del modulo de Cliente
import VRouter from './routes/router-client'
//import CUSTOMER_UPDATE from ''

const CUSTOMER_REGISTRATION = VRouter

servidor.use(cors())

servidor.all('/', (req:IRequest, res:IResponse ) => {
    res.send('Bienvenido a la API de Servicios de Optica ARANA')
})

servidor.use("/api-customer-registration", CUSTOMER_REGISTRATION)
//servidor.use("/api-customer-update", CUSTOMRT_UPDATE)

servidor.listen(PORT, () => console.log(`Servidor corriendo en: http://localhost:${PORT}`))