import React, {Component} from 'react';
import './NavigationElement.scss'

class NavigationElement extends Component {
    render() {
        return (
            <a href={this.props.href} className="nav-elem flex">{this.props.title}</a>
        );
    }
}

export default NavigationElement;