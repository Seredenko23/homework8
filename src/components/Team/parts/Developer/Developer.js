import React, {Component} from 'react';
import SocialMedia from "../SocialMedia/SocialMedia";
import './Developer.scss'

class Developer extends Component {
    render() {
        return (
            <div className={this.props.bottom ? 'bottom person flex' : 'person flex'} >
                <div style={{backgroundImage: `url(${this.props.photo})`}} className='person-photo'/>
                <h3 className='person-name'>{this.props.name}</h3>
                <span className='person-job'>{this.props.job}</span>
                <SocialMedia/>
            </div>
        );
    }
}

export default Developer;