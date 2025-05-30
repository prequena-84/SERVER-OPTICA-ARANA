import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

import type { TIdClient } from 'types/TClient'
import type { IClient, IClientResp, IClientDocument, IClientModel } from 'interfaces/Iclient'

const clientSchema = new Schema<IClientDocument>({
    // Campo único
    idClient: { 
        type: Number, 
        unique: true, 
        required: true
    }, 
    /* Con esta modificación indicamos a la base de datos que inicie con null en el caso que 
    no este definodo el parametro que recibe como dato*/
    name: { 
        type:String, 
        default: null 
    },
    lastName: { 
        type:String, 
        default: null 
    },
    document: { 
        type:Number, 
        default: null 
    },
    nationality: { 
        type:String, 
        default: null 
    },
    passport: { 
        type:String, 
        default: null 
    },
    RIF: { 
        type:String, 
        default: null 
    },
    age: { 
        type:Number, 
        default: null 
    },
    address: { 
        type:String, 
        default: null 
    },
    mail: { 
        type:String, 
        default: null 
    },
    whastApp: { 
        type:String, 
        default: null 
    },
    userName: { 
        type: String, 
        required: true, 
        unique: true, 
        default: null 
    },
    password: { 
        type: String, 
        required: true, 
        default: null 
    },
})

clientSchema.pre('save', async function(next): Promise<void> {
    // Retornamos next si es Null o sino es modificado la contraseña
    if (!this.password) return next() 
    if (!this.isModified('contraseña')) return next()
    
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

clientSchema.statics.updateDataIdClient = async function(idClient:TIdClient, dataUpdate:IClient):Promise<IClientResp> {
    try {
        const newDataClient = await this.findOneAndUpdate(
            {idClient},
            dataUpdate,
            {new:true}
        )
        return {
            data: newDataClient,
            message: `Se actualizo los datos del cliente #${newDataClient.Id_Cliente} sastifactoriamente`,
        }
    } catch(err) {
        return {
            data:null,
            message:`Se presento el siguiente Error en la actualizacion de datos: ${err}`,
        }
    }
}

clientSchema.statics.allClient = async function ():Promise<IClient[]> {
     return await this.find()
}

clientSchema.statics.createInstance = async function(dataClient:IClient[]):Promise<IClientResp> {
    try {
        const [
            idClient, 
            name,
            lastName,
            document,
            nationality,
            passport,
            RIF,
            age,
            address,
            mail,
            whastApp,
            userName,
            password,
        ] = dataClient

        const newClient = new this({
            idClient, 
            name,
            lastName,
            document,
            nationality,
            passport,
            RIF,
            age,
            address,
            mail,
            whastApp,
            userName,
            password,
        })

        await newClient.save()

        return {
            data:newClient,
            message:`Se registro el cliente #${newClient.idClient} sastifactoriamente`,
        }
    } catch(err){
        return {
            data:null,
            message:`Se presento el siguiente error al registrar al nuevo cliente: ${err}`,
        }
    }
}

/* Con esta Sintaxis de TypeScript le indicamos al modelo que tiene 3 metodos nuevo 
que no reconocia typeScript sin la definición de las Interfaces*/
const Client = model<IClientDocument,IClientModel>('Client', clientSchema)
export default Client;