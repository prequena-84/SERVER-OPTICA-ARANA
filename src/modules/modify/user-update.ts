import { connectDB, mongoose } from '../../config/configMongoDB'
import User from '../../db/models/user'

import type { TIdUser } from 'types/TUser'
import type { IUser, IUserResp } from 'interfaces/Iuser'

export default async function getUser(idUser:TIdUser, data:IUser): Promise<IUserResp> {
    try {
        await connectDB()
        return await User.updateDataIdUser(idUser,data)
    } catch(err) {
        return {
            data: null,
            message:`Hubo un Error en la actualización del cliente: ${err}`,
        }
    } finally {
        mongoose.connection.close()
    }
}