import ISR from './class/class-router'
import cors from 'cors'
import { PORT } from './config/config-app'

import type { IRequest, IResponse } from 'types/TRouter' 

// Importación Servicios del modulo de Cliente
import CUSTOMER_REGISTRATION from './routes/router-client-registration'
import CUSTOMER_UPDATE from './routes/router-client-update'
import CUSTOMER_DELETE from './routes/router-client-delete'
import CUSTOMER_DOWNLOAD from './routes/router-client-download'

const CS = new ISR()
const servidor = CS.Servidor()

servidor.use(cors())

servidor.all('/', (req:IRequest, res:IResponse ) => {
    res.send('Bienvenido a la API de Servicios de Optica ARANA')
})

servidor.use("/api-customer-update", CUSTOMER_UPDATE)
servidor.use("/api-customer-registration", CUSTOMER_REGISTRATION)
servidor.use("/api-customer-delete", CUSTOMER_DELETE)
servidor.use("/api-customer-download", CUSTOMER_DOWNLOAD)

servidor.listen(PORT, () => console.log(`Servidor corriendo en: http://localhost:${PORT}`))