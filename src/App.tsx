import * as React from "react";
import { Provider } from "react-redux";

import Routes from "pages/Routes";

const App = ({ store }: any) => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

export default App;
