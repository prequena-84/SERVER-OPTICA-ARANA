import { connectDB, mongoose } from '../../config/configMongoDB'
import Prescription from '../../db/models/prescription'

import type { IPrescription, IPrescriptionResp } from 'interfaces/Iprescription'

export default async function prescriptionAdd(
    dataPrescription: IPrescription,
):Promise<IPrescriptionResp> {
    try {
        
        await connectDB()
        return await Prescription.createInstance(dataPrescription)
    } catch(err) {

        return {
            data: null,
            message:`Hubo un Error en el registro de la Prescripción: ${err}`,
        }
    } finally {

        mongoose.connection.close()
    }
}