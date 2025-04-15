import { connectDB, mongoose } from "config/configMongoDB"
import Client from "db/models/client"

import type { IClient, IClientResp } from "interfaces/Iclient"

const ClientAdd = async (dataClient:IClient):Promise<IClientResp> => {

    await connectDB()
    return await Client.createInstance(dataClient)

    
}

export default ClientAdd