import { applyMiddleware, compose, createStore } from "redux";

import api from "../middleware/api";
import rootReducer from "./reducers";

export const store = createStore(rootReducer, compose(applyMiddleware(api)));
