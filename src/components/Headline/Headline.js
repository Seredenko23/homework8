import React, {Component} from 'react';
import './Headline.scss'

class Headline extends Component {
    render() {
        return (
            <div className='flex-column'>
                <div className='headline-wrapper flex-column'>
                    <h1 className='headline'>{this.props.header}</h1>
                    <h3 className='description'>{this.props.description}</h3>
                </div>
                {this.props.children}
            </div>

        );
    }
}

export default Headline;