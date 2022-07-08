import * as React from "react";
import {SimpleApiService} from "../services/SimpleApiService";

export class SimpleReactComponent extends React.Component {
    constructor(props) {
        super(props);
        this.apiService = new SimpleApiService()
        this.state = {
            clicks: 0,
            apiInfo: "",
        }
    }

    IncrementItem = () => {
        this.setState({clicks: this.state.clicks + 1});

        this.apiService.getResponseFromApi()
            .then(
                value => this.setState({apiInfo: value}),
                err => this.setState({apiInfo: "errormessage:" + err, err}))

    }

    render() {
        return <div>
            <h2>Hi, I am a Component!</h2>
            <button onClick={this.IncrementItem}>Test click{this.state.clicks} </button>
            <h2>{this.state.apiInfo} </h2>
        </div>;

    }
}