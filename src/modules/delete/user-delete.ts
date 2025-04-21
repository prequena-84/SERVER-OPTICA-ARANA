import { connectDB, mongoose } from '../../config/configMongoDB'
import User from '../../db/models/user'

import type { TIdUser } from 'types/TUser'
import { IUserResp } from 'interfaces/Iuser'

export default async function deleteUser(idUser:TIdUser):Promise<IUserResp> {
    try {
        await connectDB()
        const respDelete = await User.deleteOne({ idUsuario:idUser })

        return {
            data:null,
            message:respDelete.acknowledged ? `Eliminación correcta, Documentos afectados ${respDelete.deletedCount}` : `Eliminación incorrecta, Documentos afectados ${respDelete.deletedCount}`,
        }
    } catch(err){
        return {
            data:null ,
            message: `Se genero el siguiente error: ${err}`,
        }
    } finally {
        mongoose.connection.close()
    }
} 