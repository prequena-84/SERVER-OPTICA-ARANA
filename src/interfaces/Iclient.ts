import type { TIdClient,TUserName, TPassword, /*TObjectId*/ } from "types/TClient"
import { Document, Model } from 'mongoose'

interface IClient {
    /*_id?:TObjectId; Se elimina el Types.ObjectId de la interface ya 
    que generaba un conflicto con la importación del Document que ya trae por default esta
    propiedad al momento de mezcalr ambas instancias*/
    idClient:TIdClient;
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

// Interface para returna el objecto que contega data y message
interface IClientResp {
    data?:IClient | null;
    message?:string | null;
}

// Se unen las dos interface Document y IClient, genera una nueva Interface IClientDocument
interface IClientDocument extends Document, IClient{}

/* Se definene una nueva Interface "IClientModel" que extiende del typo del Model que
Que contiene los metodo que va agregar typeScript al modelo Siempre se deben definir 
los statics y methods para que el código agregue los metodos en TypeScript*/
interface IClientModel extends Model<IClientDocument> {
    updateDataIdClient(idClient:TIdClient, dataUpdate: IClient): Promise<IClientResp>;
    allClient(): Promise<IClient[]>;
    createInstance(dataClient:IClient): Promise<IClientResp>;
}

// Se exportan todas las Interfaces
export {
    IClientDocument,
    IClientModel,
    IClient,
    IClientResp
}