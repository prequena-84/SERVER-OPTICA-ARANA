import { Schema, model } from 'mongoose'

import type { TIdUser } from 'types/TUser'
import type { IUser, IUserDocument, IUserModel, IUserResp } from 'interfaces/Iuser'

const prescriptionSchema = new Schema<IUserDocument>({
    idUsuario: { 
        type: Number, 
        unique: true, 
        required: true
    }, 
    userName: { 
        type: String, 
        required: true
    }, 
    Nombres: { 
        type: String, 
        default: null,
    },
    Apellidos: { 
        type:String, 
        default: null,
    },
    Email: { 
        type:String, 
        default: null,
    },
    WhastApp: { 
        type:Number, 
        default: 0,
    },
})

prescriptionSchema.statics.updateDataIdUser = async function(
    idUser:TIdUser, 
    dataUpdate:IUser,
):Promise<IUserResp> {
    try {
        const newDataUser = await this.findOneAndUpdate(
            {idUser},
            dataUpdate,
            {new:true}
        )
        return {
            data:newDataUser,
            message: `Se actualizo los datos del usuario #${newDataUser.userName} sastifactoriamente`,
        }
    } catch(err) {
        return {
            data:null,
            message:`Se presento el siguiente Error en la actualizacion de datos: ${err}`,
        }
    }
}

prescriptionSchema.statics.allUser = async function ():Promise<IUser[]> {
    return await this.find()
}

prescriptionSchema.statics.createInstance = async function(dataUser:IUser[]):Promise<IUserResp> {
    try {
        const [
            idUsuario,
            userName,
            Password,
            Nombres,
            Apellidos,
            Email,
            WhastApp,
        ] = dataUser

        const newPrescription = new this({
            idUsuario,
            userName,
            Password,
            Nombres,
            Apellidos,
            Email,
            WhastApp,
        })

        await newPrescription.save()

        return {
            data:newPrescription,
            message:`Se registro el Usuario #${newPrescription.userName} sastifactoriamente`,
        }
    } catch(err){
        return {
            data:null,
            message:`Se presento el siguiente error al registrar al nuevo cliente: ${err}`,
        }
    }
}

const User= model<IUserDocument, IUserModel>('User', prescriptionSchema)
export default User