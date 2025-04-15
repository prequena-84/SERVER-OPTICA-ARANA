import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

import type { TIdClient } from 'types/TClient'
import type { IClient, IClientResp } from 'interfaces/Iclient'

const clientSchema = new Schema({
    idClient:{ type: Number, unique: true, required: true }, // Campo único
    name:String || null,
    lastName:String || null,
    document: Number || null,
    nationality:String || null,
    passport:String || null,
    RIF:String || null,
    age:Number || null,
    address:String || null,
    mail:String || null,
    whastApp:String || null,
    userName:{ type: String || null, required: true, unique: true },
    password: { type: String || null, required: true },
})

clientSchema.pre('save', async function(next): Promise<void> {
    // Retornamos next si es Null o sino es modificado la contraseña
    if (!this.password) return next() 
    if (!this.isModified('contraseña')) return next()
    
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    
    console.log('registro de contraseña')
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
            message:`Se registro el cliente #${newClient.Id_Cliente} sastifactoriamente`,
        }
    } catch(err){
        return {
            data:null,
            message:`Se presento el siguiente error al registrar al nuevo cliente: ${err}`,
        }
    }
}

const  Client = model('Client', clientSchema)

export default Client