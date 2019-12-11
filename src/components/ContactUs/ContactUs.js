import React, {Component} from 'react';
import Headline from "../share/Headline/Headline";
import Contacts from "./parts/Contacts/Contacts";
import Form from "./parts/Form/Form";
import './ContactUs.scss'

class ContactUs extends Component {
    render() {
        return (
            <div className='contact-us flex space-around' id='contactUs'>
                <div>
                    <Headline
                        header='Contact Us'
                        description='We know what we need to do'
                        size='small'
                    />
                    <Contacts/>
                </div>
                <Form/>
                <span className='footer'>Copyright © Kenan Hamidic. All rights reserved.</span>
            </div>
        );
    }
}

export default ContactUs;