import type { TIdClient,TUserName, TPassword, /*TObjectId*/ } from "types/TClient"
import { Document, Model } from 'mongoose'

interface IClient {
    /*_id?:TObjectId; Se elimina el Types.ObjectId de la interface ya 
    que generaba un conflicto con la importación del Document que ya trae por default esta
    propiedad al momento de mezcalr ambas instancias*/
    idClient?:TIdClient | null;
    name?:string | null;
    lastName?:string | null;
    document?: number | null;
    nationality?:string | null;
    passport?:string | null;
    RIF?:string | null;
    age?:number | null;
    address?:string | null;
    mail?:string | null;
    whastApp?:string | null;
    userName?:TUserName | null;
    password?:TPassword | null;
    __v?:number | null;
}

interface IClientResp {
    data?:IClient | null;
    message?:string | null;
}

// Se mezclan  las dos intancias Document y IClient y genera una Interfaces IClientDocument
interface IClientDocument extends Document, IClient{}

/* Se definene una interface nueva "IClientModel" que extiende del typo del Model que
Que contiene los metodo que va agregar typeScript al modelo Siempre se deben definir 
los statics y methods para que el codigo agregue lso metodos en  typeScript*/
interface IClientModel extends Model<IClientDocument> {
    updateDataIdClient(idClient:TIdClient, dataUpdate: IClient): Promise<IClientResp>;
    allClient(): Promise<IClient[]>;
    createInstance(dataClient:IClient): Promise<IClientResp>;
}

// Se exportan todos las Interfaces
export {
    IClientDocument,
    IClientModel,
    IClient,
    IClientResp
}