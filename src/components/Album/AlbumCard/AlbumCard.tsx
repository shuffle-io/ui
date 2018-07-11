import * as React from "react";

import { IAlbum } from "types";

interface IProps {
    album: IAlbum;
}

const API_ROOT: string = process.env.REACT_APP_API_ROOT || "";

const styles: any = {
    center: { textAlign: "center" },
    image: { height: "100px" }
};

class AlbumCard extends React.Component<IProps> {
    public render() {
        const { album } = this.props;

        return (
            <article className="card">
                <div className="card-image" style={styles.center}>
                    <img
                        src={`${API_ROOT}/shuffle/${album.id}`}
                        height="100px"
                        style={styles.image}
                    />
                </div>
                <div className="card-content">
                    <input
                        className="input"
                        type="text"
                        value={`${API_ROOT}/shuffle/${album.id}`}
                        readOnly
                    />
                </div>
            </article>
        );
    }
}

export default AlbumCard;
