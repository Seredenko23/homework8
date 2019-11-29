import React, {Component} from 'react';
import Contact from "../Contact/Contact";
import {faPhone, faMapMarkedAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import './Contacts.scss'

class Contacts extends Component {
    render() {
        return (
            <div className='contacts-wrapper flex-row'>
                <Contact
                    symbol={faPhone}
                    text={'555-222-333'}
                />
                <Contact
                    symbol={faMapMarkedAlt}
                    text='Here is some address'
                />
                <Contact
                    symbol={faEnvelope}
                    text='somemail@hotmail.com'
                />
            </div>
        );
    }
}

export default Contacts;