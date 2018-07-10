import * as React from "react";

import { IUser } from "types";

interface IProps {
    user: IUser;
}

const UserBlock = ({ user }: IProps) => <div>{user.account_username}</div>;

export default UserBlock;
