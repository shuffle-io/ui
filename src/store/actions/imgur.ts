import { CALL_API } from "middleware/api";

export const AUTH_REQUEST: string = "AUTH_REQUEST";
export const AUTH_SUCCESS: string = "AUTH_SUCCESS";
export const AUTH_FAILURE: string = "AUTH_FAILURE";

const CLIENT_ID: string = process.env.REACT_APP_IMGUR_CLIENT_ID || "";
const CLIENT_SECRET: string = process.env.REACT_APP_IMGUR_CLIENT_ID || "";
const BASE_URL: string = "https://api.imgur.com";

export const requestLogin = (credentials: object) => (dispatch: any) =>
    dispatch({
        [CALL_API]: {
            endpoint: `${BASE_URL}/oauth2/authorize?CLIENT_ID=${CLIENT_ID}&response_type=token&state=${CLIENT_SECRET}`,
            options: {
                method: "POST"
            },
            types: [AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE]
        }
    });
