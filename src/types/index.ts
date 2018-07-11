export interface IStore {
    user: IUser;
    albums: IAlbum[];
}

export interface IUser {
    access_token?: string;
    refresh_token?: string;
    expires_at?: string | number;
    account_username?: string;
    account_id?: string | number;
}

export interface IAction {
    status: number;
    type: string;
    response: IActionResponse;
}

export interface IActionResponse {
    data: any;
    status: number;
    success: boolean;
}

export interface IAlbum {
    id: string;
    account_id?: number;
    account_url?: string;
    cover_height?: number;
    cover_width?: number;
    cover: string;
    datetime?: number;
    description?: string | null;
    favorite?: boolean;
    images_count?: number;
    in_gallery?: boolean;
    include_album_ads?: boolean;
    is_ad?: boolean;
    layout?: string;
    link?: string;
    nsfw?: boolean;
    order?: number;
    privacy?: string;
    section?: string | null;
    title?: string | null;
    views?: number;
}
