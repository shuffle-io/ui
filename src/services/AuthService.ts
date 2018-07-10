import * as queryString from "query-string";

import { IUser } from "types";

export interface IParams extends IUser {
    expires_in: string;
}

class AuthService {
    public params: IParams;
    private setUser: (user: IUser) => void;

    public constructor(hash: string, setUser: (user: IUser) => void) {
        const params: IParams = queryString.parse(hash);

        if (params.expires_in) {
            params.expires_at =
                Number.parseInt(params.expires_in) * 1000 +
                new Date().getTime();
        }

        this.params = params;
        this.setUser = setUser;
    }

    public handleAuthentication = () => {
        if (this.params.access_token) {
            this.setUser(this.params);
            return true;
        }

        return false;
    };

    // removes user details from localStorage
    // private logout = () => {
    //     keys.forEach;
    //     // Clear access token and ID token from local storage
    //     localStorage.removeItem("access_token");
    //     localStorage.removeItem("id_token");
    //     localStorage.removeItem("expires_at");
    //     // navigate to the home route
    //     history.replace("/home");
    // };

    // private isAuthenticated = () => {
    //     // Check whether the current time is past the
    //     // access token's expiry time
    //     let expiresAt: string = localStorage.getItem("expires_at") || "";
    //     return new Date().getTime() < parseInt(expiresAt);
    // };
}

export default AuthService;
