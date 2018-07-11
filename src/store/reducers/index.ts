import { combineReducers } from "redux";

import albums from "./albums";
import auth from "./auth";

const rootReducer = combineReducers({
    albums,
    auth
});

export default rootReducer;
