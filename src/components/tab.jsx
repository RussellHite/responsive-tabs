import { Component, createElement } from "react";

export class Tab extends Component {
    render() {
        return this.props.isActive ? (
            <div className="pane-active">
                <div className="tab-pane mx-tabcontainer-pane">{this.props.tabContent}</div>
            </div>
        ) : (
            <div className="pane-active">
                <div className="tab-pane mx-tabcontainer-pane">{this.props.tabContent}</div>
            </div>
        );
    }
}
