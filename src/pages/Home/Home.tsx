import * as React from "react";

class Home extends React.Component {
    public render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <button type="submit">Login with Imgur</button>
                </form>
            </div>
        );
    }

    private onSubmit(e: any) {
        console.log(e);
    }
}

export default Home;
