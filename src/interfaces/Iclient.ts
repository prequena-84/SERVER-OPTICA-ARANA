import type { TIdClient,TUserName, TPassword, TObjectId } from "types/TClient"

interface IClient {
    _id?:TObjectId | null;
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

export {
    IClient,
    IClientResp
}