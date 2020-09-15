import { Component, createElement } from "react";

export class TabTitle extends Component {
    render() {
        // eslint-disable-next-line prettier/prettier
        return this.props.isActive ? (
            <li className="tab-active">
                <a>{this.props.tabTitle}</a>
            </li>
        ) : (
            <li>
                <a onClick={this.props.handleToggle(this.props.tabId)}>{this.props.tabTitle}</a>
            </li>
        );
    }
}
