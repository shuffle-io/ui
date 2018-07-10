import { AUTH_SUCCESS } from "../actions";

import { IAction } from "types";

interface IState {
    accessToken: string;
    username: string;
}

const INITIAL_STATE: IState = {
    accessToken: "",
    username: ""
};

const auth = (state = INITIAL_STATE, action: IAction) => {
    console.log(action);
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state
                // user: action.response
            };
        default:
            return state;
    }
};

export default auth;
