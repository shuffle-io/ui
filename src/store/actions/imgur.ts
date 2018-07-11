import { CALL_API } from "middleware/api";

const CLIENT_ID: string = process.env.REACT_APP_IMGUR_CLIENT_ID || "";
// const CLIENT_SECRET: string = process.env.REACT_APP_IMGUR_CLIENT_ID || "";
const BASE_URL: string = "https://api.imgur.com";

const AUTH: object = {
    Authorization: `Client-ID ${CLIENT_ID}`
};

export const GET_ALBUMS_REQUEST: string = "GET_ALBUMS_REQUEST";
export const GET_ALBUMS_SUCCESS: string = "GET_ALBUMS_SUCCESS";
export const GET_ALBUMS_FAILURE: string = "GET_ALBUMS_FAILURE";

export const getAlbums = (username: string) => (dispatch: any) =>
    dispatch({
        [CALL_API]: {
            endpoint: `${BASE_URL}/3/account/${username}/albums`,
            options: {
                headers: {
                    ...AUTH
                },
                method: "GET"
            },
            types: [GET_ALBUMS_REQUEST, GET_ALBUMS_SUCCESS, GET_ALBUMS_FAILURE]
        }
    });

export const GET_ALBUM_IMAGES_REQUEST: string = "GET_ALBUM_IMAGES_REQUEST";
export const GET_ALBUM_IMAGES_SUCCESS: string = "GET_ALBUM_IMAGES_SUCCESS";
export const GET_ALBUM_IMAGES_FAILURE: string = "GET_ALBUM_IMAGES_FAILURE";

export const getAlbumImages = (hash: string) => (dispatch: any) =>
    dispatch({
        [CALL_API]: {
            endpoint: `${BASE_URL}/3/album/${hash}/images`,
            options: {
                headers: {
                    ...AUTH
                },
                method: "GET"
            },
            types: [
                GET_ALBUM_IMAGES_REQUEST,
                GET_ALBUM_IMAGES_SUCCESS,
                GET_ALBUM_IMAGES_FAILURE
            ]
        }
    });
