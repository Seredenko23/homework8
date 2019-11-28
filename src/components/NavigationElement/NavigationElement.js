import React, {Component} from 'react';
import './NavigationElement.scss'

class NavigationElement extends Component {
    render() {
        return (
            <a href="#" className="nav-elem flex-row">{this.props.title}</a>
        );
    }
}

export default NavigationElement;