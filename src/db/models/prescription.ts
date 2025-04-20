import { Schema, model } from 'mongoose'

import type { TIdClient } from 'types/TClient'
import type { IPrescription, IPrescriptionResp, IClientDocument, IPrescriptionModel } from 'interfaces/Iprescription'

const prescriptionSchema = new Schema<IClientDocument>({
    idOperation: { 
        type: Number, 
        unique: true, 
        required: true
    }, 
    id_Client: { 
        type: Number, 
        required: true
    }, 
    fecha: { 
        type: Date, 
        default: null,
    },
    esferaD: { 
        type:Number, 
        default: 0,
    },
    esferaI: { 
        type:Number, 
        default: 0,
    },
    cilindroD: { 
        type:Number, 
        default: 0,
    },
    cilindroI: { 
        type:Number, 
        default: 0,
    },
    ejeD: { 
        type:Number, 
        default: 0,
    },
    ejeI: { 
        type:Number, 
        default: 0,
    },
    addD: { 
        type:Number, 
        default: 0,
    },
    addI: { 
        type:Number, 
        default: 0,
    },
    dPnD: { 
        type:Number, 
        default: 0,
    },
    dPnI: { 
        type:Number, 
        default: 0,
    },
    alturaFocalD: { 
        type:Number, 
        default: 0,
    },
    alturaFocalI: { 
        type:Number, 
        default: 0,
    },
    tipoLente: { 
        type:String, 
        required: true, 
        default: null,
    },
    materialLente: { 
        type:String, 
        required: true, 
        default: null,
    },
    tratamiento: { 
        type:String, 
        required: true, 
        default: null, 
    },
    observaciones: {
        type:String, 
        required: true, 
        default: null, 
    }, 
})

prescriptionSchema.statics.updateDataIdPrescription = async function(
    idClient:TIdClient, 
    dataUpdate:IPrescription
):Promise<IPrescriptionResp> {
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

prescriptionSchema.statics.allPrescriptions = async function ():Promise<IPrescription[]> {
    return await this.find()
}

prescriptionSchema.statics.createInstance = async function(dataClient:IPrescription[]):Promise<IPrescriptionResp> {
    try {
        const [
            idClient,
            fecha,
            esferaD,
            esferaI,
            cilindroD,
            cilindroI,
            ejeD,
            ejeI,
            addD,
            addI,
            dPnD,
            dPnI,
            alturaFocalD,
            alturaFocalI,
            tipoLente,
            materialLente,
            tratamiento,
            observaciones,
        ] = dataClient

        const newPrescription = new this({
            idClient,
            fecha,
            esferaD,
            esferaI,
            cilindroD,
            cilindroI,
            ejeD,
            ejeI,
            addD,
            addI,
            dPnD,
            dPnI,
            alturaFocalD,
            alturaFocalI,
            tipoLente,
            materialLente,
            tratamiento,
            observaciones,
        })

        await newPrescription.save()

        return {
            data:newPrescription,
            message:`Se registro el cliente #${newPrescription.id_Client} sastifactoriamente`,
        }
    } catch(err){
        return {
            data:null,
            message:`Se presento el siguiente error al registrar al nuevo cliente: ${err}`,
        }
    }
}

const Prescription = model<IClientDocument,IPrescriptionModel>('Prescription', prescriptionSchema)
export default Prescription