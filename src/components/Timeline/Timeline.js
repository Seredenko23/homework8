import React, {Component} from 'react';
import TimelineElement from "../TimelineElement/TimelineElement";
import './Timeline.scss'

class Timeline extends Component {
    render() {
        return (
            <div className="timeline-wrapper">
                <div className='timeline'/>
                <div className="grid">
                    <div className='grid-elem flex flex-end'>
                        <TimelineElement
                            year = '2011'
                            text = {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, obcaecati quaerat?
                                Consequatur id modi quisquam?`}
                            position='left'
                            size='small'
                        />
                    </div>
                    <div/>
                    <div/>
                    <div className='grid-elem flex flex-start'>
                        <TimelineElement
                            year = '2012'
                            text = {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, obcaecati quaerat?
                                Consequatur id modi quisquam?`}
                            position='right'
                            size='small'
                        />
                    </div>
                    <div className='grid-elem flex flex-end'>
                        <TimelineElement
                            year = '2013'
                            text = {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, obcaecati quaerat?
                                Consequatur id modi quisquam?`}
                            position='left'
                            size='big'
                        />
                    </div>
                    <div/>
                    <div/>
                    <div className='grid-elem flex flex-start'>
                        <TimelineElement
                            year = '2014'
                            text = {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, obcaecati quaerat?
                                Consequatur id modi quisquam?`}
                            position='right'
                            size='small'
                        />
                    </div>
                </div>
            </div>

        );
    }
}

export default Timeline;