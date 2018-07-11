import * as React from "react";

import { mount as enzymeMount } from "enzyme";
import "jest-enzyme";

import { IAlbum } from "types";
import AlbumCard from "./AlbumCard";

describe("AlbumCard", () => {
    let album: IAlbum;
    let mounted: React.ReactNode;

    const mount = () => {
        mounted = mounted || enzymeMount(<AlbumCard {...{ album }} />);
        return mounted;
    };

    beforeEach(() => {
        album = {
            cover: "coverHash",
            id: "albumHash"
        };
        mounted = null;
    });

    describe("renders", () => {
        it("without crashing", () => {
            expect(mount()).toExist();
        });
    });
});
