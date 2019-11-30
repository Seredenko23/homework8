import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Contact.scss'

class Contact extends Component {
    render() {
        return (
            <div className='contact flex'>
                <FontAwesomeIcon className='symbol' icon={this.props.symbol}/>
                <span className='contact-title'>{this.props.text}</span>
            </div>
        );
    }
}

export default Contact;