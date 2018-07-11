import * as React from "react";

import { /*Link,*/ Route, Router } from "react-router-dom";

import Callback from "components/Callback";
// import Navbar from "components/Navbar";
import Home from "pages/Home";
import { AuthService } from "services";
import { history } from "store";
import { setUser } from "store/actions";

const handleAuthentication = (nextState: any, replace: any = null) => {
    if (nextState.location.hash) {
        const handled: boolean = new AuthService(
            nextState.location.hash,
            setUser
        ).handleAuthentication();

        handled ? history.replace("/home") : history.replace("/home");
    }
};

const renderCallback = (props: any) => {
    handleAuthentication(props);
    return <Callback {...props} />;
};

const Routes = () => (
    <Router history={history}>
        <div>
            {/* <Navbar>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>
            </Navbar> */}

            <Route exact path="/" component={Home} />

            <Route path="/callback" render={renderCallback} />
        </div>
    </Router>
);

export default Routes;
