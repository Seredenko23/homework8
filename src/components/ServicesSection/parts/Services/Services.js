import React, {Component} from 'react';
import {faChartLine, faCloudUploadAlt, faHeart} from "@fortawesome/free-solid-svg-icons";
import Service from "./parts/Service/Service";
import './Services.scss'

class Services extends Component {
    render() {
        return (
            <div className='services-wrapper flex'>
                <Service
                    symbol={faChartLine}
                    title={'Some Analytics'}
                    description={'Aenean nisi lectus, convallis non lorem sit amet, rhoncus males'}
                />
                <Service
                    symbol={faHeart}
                    title={'We provide you love'}
                    description={'Aenean nisi lectus, convallis non lorem sit amet, rhoncus males'}
                />
                <Service
                    symbol={faCloudUploadAlt}
                    title={'And Some Cloud'}
                    description={'Aenean nisi lectus, convallis non lorem sit amet, rhoncus males'}
                />
            </div>
        );
    }
}

export default Services;