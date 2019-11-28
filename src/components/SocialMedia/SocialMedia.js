import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

import './SocialMedia.scss'

class SocialMedia extends Component {
    render() {
        return (
            <div className='social-media'>
                <FontAwesomeIcon className='social instagram' icon={faFacebookF} />
                <FontAwesomeIcon className='social facebook' icon={faInstagram} />
            </div>
        );
    }
}

export default SocialMedia;