import React, {Component} from 'react';
import Headline from "../Headline/Headline";
import Services from "../Services/Services";
import Button from "../Button/Button";
import bg from '../../assets/img/Posts.png'
import './ServicesSection.scss'

class ServicesSection extends Component {
    render() {
        return (
            <div className='services flex'>
                <div style={{backgroundImage: `url(${bg})`}} className="wrapper flex space-around">
                    <div className='services-content flex space-between'>
                        <Headline
                            header='We provide you everything'
                            description='Maybe not everything, but we provide you some stuff.'
                            size='small'/>
                        <Services />
                    </div>
                    <Button
                        text="VISIT OUR BLOG"
                    />
                </div>
            </div>
        );
    }
}

export default ServicesSection;