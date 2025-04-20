import { connectDB, mongoose } from '../../config/configMongoDB'
import Prescription from '../../db/models/prescription'

import type { TIdOperation } from 'types/TPrescription'
import type { IPrescription,IPrescriptionResp } from 'interfaces/Iprescription'

export default async function getPrescription(idOperacion:TIdOperation, data:IPrescription): Promise<IPrescriptionResp> {
    try {
        await connectDB()
        return await Prescription.updateDataIdPrescription(idOperacion,data)
    } catch(err) {
        return {
            data: null,
            message:`Hubo un Error en la actualización del cliente: ${err}`,
        }
    } finally {
        mongoose.connection.close()
    }
}