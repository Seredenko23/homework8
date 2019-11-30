import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Symbol.scss'

class Symbol extends Component {
    render() {
        return (
            <div className='symbol-wrapper flex'>
                <FontAwesomeIcon className='icon' icon={this.props.symbol}/>
            </div>
        );
    }
}

export default Symbol;