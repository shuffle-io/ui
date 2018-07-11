import { GET_ALBUMS_SUCCESS } from "../actions";

import { IAction, IAlbum } from "types";

type State = IAlbum[];

const INITIAL_STATE: State = [];

const auth = (state = INITIAL_STATE, action: IAction) => {
    switch (action.type) {
        case GET_ALBUMS_SUCCESS:
            return action.response.data;
        // case GET_ALBUM_IMAGES_SUCCESS:
        //     return [];
        default:
            return state;
    }
};

export default auth;
