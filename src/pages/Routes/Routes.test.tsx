import * as React from "react";

import { mount as enzymeMount } from "enzyme";
import "jest-enzyme";

import Routes from "./Routes";

describe("Routes", () => {
    let mounted: React.ReactNode;

    const mount = () => {
        mounted = mounted || enzymeMount(<Routes />);
        return mounted;
    };

    beforeEach(() => {
        mounted = null;
    });

    describe("renders", () => {
        it("without crashing", () => {
            expect(mount()).toExist();
        });
    });
});
