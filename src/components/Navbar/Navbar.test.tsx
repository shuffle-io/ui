import * as React from "react";

import { mount as enzymeMount, ReactWrapper } from "enzyme";
import "jest-enzyme";

import { IUser } from "types";
import Navbar, { GuestBlock, UserBlock } from "./";

describe("Navbar", () => {
    let children: React.ReactElement<any> | null;
    let mounted: ReactWrapper | null;
    let user: IUser | null;

    const mount = () => {
        mounted =
            mounted ||
            enzymeMount(<Navbar {...user && { user }}>{children}</Navbar>);
        return mounted;
    };

    beforeEach(() => {
        children = null;
        mounted = null;
        user = {
            account_username: "A Username"
        };
    });

    describe("renders", () => {
        it("without crashing", () => {
            expect(mount()).toExist();
        });

        it("children", () => {
            children = <b>hello world</b>;
            expect(mount()).toContainReact(children);
        });

        it("login link when unauthenticated", () => {
            user = null;
            expect(mount().find(GuestBlock)).toExist();
        });

        it("profile link when authenticated", () => {
            const block: ReactWrapper = mount().find(UserBlock);
            expect(block).toExist();

            expect(block).toIncludeText(user!.account_username!);
        });
    });
});
