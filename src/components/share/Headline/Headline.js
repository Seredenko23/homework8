import React, {Component} from 'react';
import './Headline.scss'

class Headline extends Component {
    render() {
        return (
            <div className='headline-content flex'>
                    {this.props.size === 'big' ?
                        (<div className='headline-wrapper flex'>
                            <h1 className='headline'>{this.props.header}</h1>
                            <h2 className='description'>{this.props.description}</h2>
                        </div>
                        ) : (
                        <div className='headline-wrapper flex'>
                            <h4 className='small-headline'>{this.props.header}</h4>
                            <h6 className='small-description'>{this.props.description}</h6>
                        </div>
                        )}
                {this.props.children}
            </div>
        );
    }
}

export default Headline;