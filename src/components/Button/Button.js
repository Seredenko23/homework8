import React, {Component} from 'react';
import './Button.scss'

class Button extends Component {
    render() {
        return (
            <button className="btn">{this.props.text}</button>
        );
    }
}

export default Button;