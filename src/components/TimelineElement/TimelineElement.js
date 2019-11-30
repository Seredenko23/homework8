import React, {Component} from 'react';
import './TimelineElement.scss'

class TimelineElement extends Component {

    render() {
        let ballClass = `circle ${this.props.size} ${this.props.position}`
        let ball = (<div className={ballClass}/>)

        return (
            <div className='timeline-elem flex flex-start'>
                {this.props.position === 'right' && ball}
                <div className={`timeline-title flex ${this.props.position === 'left' ? 'flex-end' : 'flex-start'}`}>
                    <h3 className='year'>{this.props.year}</h3>
                    <p className='timeline-description'>{this.props.text}</p>
                </div>
                {this.props.position === 'left' && ball}
            </div>
        );
    }
}

export default TimelineElement;