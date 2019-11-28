import React, {Component} from 'react';
import Headline from "../Headline/Headline";
import SocialMedia from "../SocialMedia/SocialMedia";
import './Developer.scss'

class Developer extends Component {
    render() {
        return (
            <div className={this.props.bottom ? 'bottom person flex-column' : 'person flex-column'} >
                <div style={{backgroundImage: `url(${this.props.photo})`}} className='photo'/>
                <Headline
                    header={this.props.name}
                    description={this.props.job}
                    size='small'/>
                    <SocialMedia/>
            </div>
        );
    }
}

export default Developer;