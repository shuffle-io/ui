import * as React from "react";

import { debounce } from "lodash";
import { connect } from "react-redux";

import AlbumCard from "components/Album";
import * as actions from "store/actions/imgur";
import { IAlbum, IStore, IUser } from "types";

const DEBOUNCE_TIME: number = 200;
interface IProps {
    albums: IAlbum[];
    user: IUser;
    getAlbums(username: string): any;
    getAlbumImages(hash: string): any;
}

const styles: any = {
    header: {
        fontFamily: "Segoe UI",
        fontWeight: "800",
        textTransform: "uppercase"
    }
};

class Home extends React.Component<IProps> {
    private inputRef: React.RefObject<any> = React.createRef();
    private debounce = debounce(
        (e: string) => this.getImages(e),
        DEBOUNCE_TIME
    );

    /**
     * Get initial album set
     *
     * `inputRef.current` is not available until after mount
     *
     * @todo Remove for prod
     */
    public componentDidMount() {
        const { getAlbums } = this.props;
        if (this.inputRef.current) {
            getAlbums(this.inputRef.current.value);
        }
    }

    public render() {
        const { albums } = this.props;

        return (
            <div>
                <section className="hero is-primary is-bold is-medium has-text-centered">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title" style={styles.header}>
                                An image{" "}
                                <span className="has-text-dark">
                                    randomizer
                                </span>{" "}
                                for <span className="has-text-dark">Imgur</span>{" "}
                                albums
                            </h1>

                            <h2 className="subtitle" />
                        </div>
                    </div>
                </section>

                <div className="section has-text-centered">
                    <div className="container">
                        <form>
                            <label className="label" htmlFor="username">
                                What's your Imgur username?
                            </label>

                            <div className="columns is-centered">
                                <div className="column is-one-fourth is-narrow">
                                    <input
                                        type="text"
                                        defaultValue="shinkaaa"
                                        aria-label="Imgur Username"
                                        onChange={this.inputHandler}
                                        ref={this.inputRef}
                                        id="username"
                                        className="input has-text-centered is-radiusless"
                                    />

                                    <p className="help">
                                        ShuffleIO works by choosing a random
                                        image from a public Imgur album.
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>

                    <hr />

                    <div className="columns is-centered" style={{ flexWrap: "wrap" }}>
                        {albums.map((album: IAlbum) => (
                            <div
                                className="column is-one-fourth is-narrow"
                                key={`album-${album.id}`}
                            >
                                <AlbumCard {...{ album }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    private inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        this.debounce(e.target.value);
    };

    private getImages = (username: string) => {
        if (username) {
            const { getAlbums } = this.props;
            getAlbums(username);
        }
    };
}

function mapStateToProps(state: IStore) {
    return {
        albums: state.albums,
        user: state.user
    };
}

export default connect(
    mapStateToProps,
    actions
)(Home);
