import React, {Component} from 'react';
import './Button.scss'

class Button extends Component {
    render() {
        return (
            <button className="btn">
                <span className='btn-title'>{this.props.text}</span>
            </button>
        );
    }
}

export default Button;