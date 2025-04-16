import ISR from './class/Crouter' //'class/Crouter'
import cors from 'cors'
import { PORT } from './config/config-app'

import type { IRequest, IResponse } from 'types/TRouter' 

// Importación Servicios del modulo de Cliente
import CUSTOMER_REGISTRATION from './routes/router-client-registration'
import CUSTOMER_UPDATE from './routes/router-client-update'

const CS = new ISR()
const servidor = CS.Servidor()

servidor.use(cors())

servidor.all('/', (req:IRequest, res:IResponse ) => {
    res.send('Bienvenido a la API de Servicios de Optica ARANA')
})

servidor.use("/api-customer-update", CUSTOMER_UPDATE)
servidor.use("/api-customer-registration", CUSTOMER_REGISTRATION)

servidor.listen(PORT, () => console.log(`Servidor corriendo en: http://localhost:${PORT}`))