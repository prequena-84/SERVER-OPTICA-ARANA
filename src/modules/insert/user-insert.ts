import { connectDB, mongoose } from '../../config/configMongoDB'
import User from '../../db/models/user'

import type { IUser, IUserResp } from 'interfaces/Iuser'

export default async function userAdd(dataUser:IUser):Promise<IUserResp> {
    try {

        await connectDB()
        return await User.createInstance(dataUser)
    } catch(err) {

        return {
            data: null,
            message:`Hubo un Error en el registro del Usuario: ${err}`,
        }
    } finally {

        mongoose.connection.close()
    }
}