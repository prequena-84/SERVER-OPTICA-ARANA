import { connectDB, mongoose } from "config/configMongoDB"
import Client from "db/models/client"

import type { IClient, IClientResp } from "interfaces/Iclient"

const ClientAdd = async (dataClient:IClient):Promise<IClientResp> => {
    try {

        await connectDB()
        return await Client.createInstance(dataClient)
    } catch(err) {

        return {
            data: null,
            message:`Hubo un Error en el registro del cliente: ${err}`,
        }
    } finally {
        
        mongoose.connection.close()
    }
}

export default ClientAdd