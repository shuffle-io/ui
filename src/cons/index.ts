const CLIENT_ID: string = process.env.REACT_APP_IMGUR_CLIENT_ID || "";
const CLIENT_SECRET: string = process.env.REACT_APP_IMGUR_CLIENT_ID || "";
const BASE_URL: string = "https://api.imgur.com";

export const authUrl: string = `${BASE_URL}/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token&state=${CLIENT_SECRET}`;
