import * as React from "react";

import { debounce } from "lodash";
import { connect } from "react-redux";

import AlbumCard from "components/Album";
import * as actions from "store/actions/imgur";
import { IAlbum, IStore, IUser } from "types";

const API_ROOT: string = process.env.REACT_APP_API_ROOT || "http://shuffle.io";
const DEBOUNCE_TIME: number = 200;
interface IProps {
    albums: IAlbum[];
    user: IUser;
    getAlbums(username: string): any;
    getAlbumImages(hash: string): any;
}

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
                <p>
                    ShuffleIO works by choosing a random image from a public
                    Imgur album. Any public album may be used by plugging the
                    album's ID into the shuffle endpoint:&nbsp;
                    {`${API_ROOT}/api/shuffle/<ALBUM_ID>`}.
                </p>

                <form>
                    View your public albums:
                    <input
                        type="text"
                        defaultValue="shinkaaa"
                        aria-label="Imgur Username"
                        onChange={this.inputHandler}
                        ref={this.inputRef}
                    />
                </form>

                {albums.map((album: IAlbum) => (
                    <AlbumCard key={`album-${album.id}`} {...{ album }} />
                ))}
            </div>
        );
    }

    private inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        this.debounce(e.target.value);
    };

    private getImages = (username: string) => {
        const { getAlbums } = this.props;
        getAlbums(username).then((response: any) => {
            // console.log(response);
        });
        // .then((response: any) => {
        //     getAlbumImages(response.data.id);
        // });
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
