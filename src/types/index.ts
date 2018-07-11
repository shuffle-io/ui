export interface IStore {
    user: IUser;
}

export interface IUser {
    access_token?: string;
    refresh_token?: string;
    expires_at?: string | number;
    account_username?: string;
    account_id?: string | number;
}

export interface IAction {
    type: string;
    response: Response;
}
