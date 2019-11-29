import React, {Component} from 'react';
import Symbol from "../Symbol/Symbol";
import './Service.scss'

class Service extends Component {
    render() {
        return (
            <div className='service flex-column'>
                <Symbol
                    symbol={this.props.symbol}
                />
                <h3 className='service-title'>{this.props.title}</h3>
                <span className='service-description'>{this.props.description}</span>
            </div>
        );
    }
}

export default Service;