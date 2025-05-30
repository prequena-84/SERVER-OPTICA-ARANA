import type { TIdUser,TUser,TPassword } from 'types/TUser'
import { Document, Model } from 'mongoose'

interface IUser {
    idUsuario?:TIdUser;
    userName:TUser;
    Password:TPassword;
    Nombres?:string;
    Apellidos?:string;
    Email?:string
    WhastApp?:string;
    //Token?:string;
}

interface IUserResp {
    data?:IUser | null;
    message?:string | null;
}

interface IUserDocument extends Document, IUser{}

interface IUserModel extends Model<IUserDocument> {
    updateDataIdUser(idUser:TIdUser, dataUpdate:IUser ): Promise<IUserResp>;
    allUser(): Promise<IUser[]>;
    createInstance(dataClient:IUser): Promise<IUserResp>;
}

export {
    IUser,
    IUserResp,
    IUserDocument,
    IUserModel,
}