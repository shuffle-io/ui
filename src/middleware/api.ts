export const API_ROOT: string = "";

const callApi = (
    endpoint: string,
    options: RequestInit = {},
    useRoot: boolean = true
) => {
    const root: string = useRoot ? API_ROOT : "";
    return fetch(root + endpoint, options)
        .then((response: Response) => {
            return response.json();
        })
        .catch((error: Response) => {
            return error.status
                ? Promise.reject(error)
                : Promise.reject({ status: 401 });
        });
};

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol("Call API");

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default (store: any) => (next: any) => (action: any) => {
    const callAPI = action[CALL_API];

    if (callAPI && callAPI.options) {
        callAPI.options = { ...callAPI.options, mode: "cors" };
    }

    if (typeof callAPI === "undefined") {
        return next(action);
    }

    let { endpoint } = callAPI;
    const { types, options } = callAPI;

    if (typeof endpoint === "function") {
        endpoint = endpoint(store.getState());
    }

    if (typeof endpoint !== "string") {
        throw new Error("Specify a string endpoint URL.");
    }
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error("Expected an array of three action types.");
    }
    if (!types.every(type => typeof type === "string")) {
        throw new Error("Expected action types to be strings.");
    }

    const actionWith = (data: any) => {
        const finalAction = { ...action, ...data };
        delete finalAction[CALL_API];
        return finalAction;
    };

    const [requestType, successType, failureType] = types;
    next(actionWith({ type: requestType }));

    return callApi(endpoint, options).then(
        response =>
            next(
                actionWith({
                    response,
                    status: response.status,
                    type: successType
                })
            ),
        error => {
            next(
                actionWith({
                    error: error.error_description || "Uncaught",
                    fullError: error,
                    status: error.status,
                    type: failureType
                })
            );
        }
    );
};
