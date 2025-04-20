import type { TIdClient } from "types/TClient"
import { Document, Model } from 'mongoose'

interface IPrescription {
    idOperation: number;
    id_Client: number;
    fecha:Date;
    esferaD:number | 0;
    esferaI:number | 0;
    cilindroD:number | 0;
    cilindroI:number | 0;
    ejeD:number | 0;
    ejeI:number | 0;
    addD:number | 0;
    addI:number | 0;
    dPnD:number | 0;
    dPnI:number | 0;
    alturaFocalD:number | 0;
    alturaFocalI:number | 0;
    tipoLente:String | null;
    materialLente:String | null;
    tratamiento:String | null;
    observaciones:String | null;
}

interface IPrescriptionResp {
    data?:IPrescription | IPrescription[] | null;
    message?:string | null;
}

interface IClientDocument extends Document, IPrescription{}

interface IPrescriptionModel extends Model<IClientDocument> {
    updateDataIdPrescription(
        idClient:TIdClient, 
        dataUpdate:IPrescription,
    ): Promise<IPrescriptionResp>;
    createInstance(dataPrescription:IPrescription): Promise<IPrescriptionResp>;
}

export {
    IPrescription,
    IPrescriptionResp,
    IClientDocument,
    IPrescriptionModel,
}