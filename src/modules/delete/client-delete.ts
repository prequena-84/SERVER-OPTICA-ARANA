import { connectDB, mongoose } from '../../config/configMongoDB'
import Client from '../../db/models/client'

import type { TIdClient } from 'types/TClient'
import type { IClientResp } from 'interfaces/Iclient'

export default async function deleteClient( idClient:TIdClient ): Promise<IClientResp> {
    try {
        await connectDB()
        const respDelete = await Client.deleteOne({ idClient:idClient })

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