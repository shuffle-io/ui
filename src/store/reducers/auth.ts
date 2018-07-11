// import { AUTH_SUCCESS } from "../actions";

import { IAction, IUser } from "types";

const INITIAL_STATE: IUser = {};

const auth = (state = INITIAL_STATE, action: IAction) => {
    console.log(action);
    return state;
};

export default auth;
