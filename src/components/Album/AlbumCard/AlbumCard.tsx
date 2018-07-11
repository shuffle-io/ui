import * as React from "react";

import { IAlbum } from "types";

interface IProps {
    album: IAlbum;
}

const styles: object = {
    display: "inline-block"
};

const API_ROOT: string = process.env.REACT_APP_API_ROOT || "";

class AlbumCard extends React.Component<IProps> {
    public render() {
        const { album } = this.props;

        return (
            <div style={styles}>
                <h2>{album.title}</h2>

                <img src={`${API_ROOT}/shuffle/${album.id}`} height="100px" />

                <p>{album.description}</p>

                <input
                    type="text"
                    value={`${API_ROOT}/shuffle/${album.id}`}
                    readOnly
                />
            </div>
        );
    }
}

export default AlbumCard;
