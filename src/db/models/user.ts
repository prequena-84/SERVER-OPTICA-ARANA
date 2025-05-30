import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

import type { TIdUser } from 'types/TUser'
import type { IUser, IUserDocument, IUserModel, IUserResp } from 'interfaces/Iuser'

const prescriptionSchema = new Schema<IUserDocument>({
    idUsuario: { 
        type: String, 
        unique: true, 
        required: true
    }, 
    Password: {
        type: String,
        require:true,
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
        type:String, 
        default: 0,
    },
})

prescriptionSchema.pre('save', async function(next): Promise<void> {
    // Retornamos next si es Null o sino es modificado la contraseña
    if (!this.Password) return next() 
    if (!this.isModified('Password')) return next()

    const salt = await bcrypt.genSalt(10)
    this.Password = await bcrypt.hash(this.Password, salt)
    next()
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

prescriptionSchema.statics.createInstance = async function(dataUser:IUser):Promise<IUserResp> {
    try {

        const {
            idUsuario,
            userName,
            Password,
            Nombres,
            Apellidos,
            Email,
            WhastApp,
        } = dataUser

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
            message:`Se presento el siguiente error al registrar al nuevo usuario: ${err}`,
        }
    }
}

const User= model<IUserDocument, IUserModel>('User', prescriptionSchema)
export default User