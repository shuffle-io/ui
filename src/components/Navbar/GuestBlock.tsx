import * as React from "react";

import { authUrl } from "cons";

const GuestBlock = () => (
    <div>
        <a href={authUrl}>Login with Imgur</a>
    </div>
);

export default GuestBlock;
