import React, {Component} from 'react';
import './Form.scss'

class Form extends Component {
    render() {
        return (
            <form className='contact-form flex'>
                <input type="text" placeholder='Full Name' className="contact-input"/>
                <input type="text" placeholder='Email' className="contact-input"/>
                <input type="text" placeholder='Number' className="contact-input"/>
                <textarea name="contact" placeholder='Write your message...' className="contact-textarea"/>
                <button className='submit' type='submit'>
                    <span className='submit-title'>Submit</span>
                </button>
            </form>
        );
    }
}

export default Form;