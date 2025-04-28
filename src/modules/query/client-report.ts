import { connectDB, mongoose } from '../../config/configMongoDB'
import Client from '../../db/models/client'

import type { IPrescription,IPrescriptionResp } from 'interfaces/Iprescription'

export default async function reportCliente(): Promise<IPrescriptionResp> {
    try {
        await connectDB()

        const report:IPrescription[] = await Client.aggregate([
            {
                $lookup: {
                  from: "Prescription",     // Tabla a unificar
                  localField: "Id_Cliente", // Campo de ID colección de Tabla a unificar
                  foreignField: "idClient", // Campo de ID colección de clientes
                  as: "Repote_Operaciones", // Nombre del campo donde se guardará la información combinada
                }
            },
            {
                $unwind: "$Client"
            },
        ])

        return {
            data:report,
            message: 'Reporte de Cliente',
        }
    } catch(err) {
        return {
            data:null,
            message: 'Reporte de Cliente',
        }
    } finally {
        mongoose.connection.close()
    }
}