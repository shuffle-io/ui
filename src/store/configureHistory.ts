import createHistory from "history/createBrowserHistory";

export const history: any = createHistory({
    basename:
        process.env.NODE_ENV === "development"
            ? ""
            : "/reactivesearch-auth0-example"
});
