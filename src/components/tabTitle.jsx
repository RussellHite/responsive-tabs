import { Component, createElement } from "react";

export class TabTitle extends Component {
    render() {
        // eslint-disable-next-line prettier/prettier
        return <a onClick={this.props.handleToggle}>{this.props.tabTitle}</a>;
    }
}
