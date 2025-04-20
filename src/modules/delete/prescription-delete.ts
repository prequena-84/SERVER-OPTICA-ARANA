import { connectDB, mongoose } from '../../config/configMongoDB'
import Prescription from '../../db/models/prescription'

import type { TIdOperation } from 'types/TPrescription'
import type { IPrescriptionResp } from 'interfaces/Iprescription'

export default async function deletePrescription(
    idOperation:TIdOperation
):Promise<IPrescriptionResp> {
    try {
        await connectDB()
        const respDelete = await Prescription.deleteOne({ idOperation:idOperation  })
        
        return {
            data:null,
            message:respDelete.acknowledged ? `Eliminación correcta, Documentos afectados ${respDelete.deletedCount}` : `Eliminación incorrecta, Documentos afectados ${respDelete.deletedCount}`,
        }
    } catch(err) {
        return {
            data:null ,
            message: `Se genero el siguiente error: ${err}`,
        }
    } finally {
        mongoose.connection.close()
    }
}