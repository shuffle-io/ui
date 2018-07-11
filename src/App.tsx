import * as React from "react";
import { Provider } from "react-redux";

import Home from "pages/Home";

const App = ({ store }: any) => (
    <Provider store={store}>
        <Home />
    </Provider>
);

export default App;
