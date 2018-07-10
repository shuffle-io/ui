import * as React from "react";

import { IUser } from "types";
import { GuestBlock, UserBlock } from "./";

interface IProps {
    children?: React.ReactNode;
    user?: IUser;
}

class Navbar extends React.Component<IProps> {
    public render() {
        const { children, user } = this.props;

        return (
            <div>
                {children}

                {user ? <UserBlock {...{ user }} /> : <GuestBlock />}
            </div>
        );
    }
}

export default Navbar;
