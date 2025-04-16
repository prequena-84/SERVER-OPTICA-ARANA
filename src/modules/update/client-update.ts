import { connectDB, mongoose } from '../../config/configMongoDB'
import Client from '../../db/models/client'

import type { TIdClient } from 'types/TClient'
import type { IClient, IClientResp } from "interfaces/Iclient"

const getClient = async (idClient:TIdClient, data:IClient): Promise<IClientResp> => {
    try {

        await connectDB()
        return await Client.updateDataIdClient(idClient,data)
    } catch(err) {

        return {
            data: null,
            message:`Hubo un Error en la actualización del cliente: ${err}`,
        }
    } finally {

        mongoose.connection.close()
    }
}

export default getClient