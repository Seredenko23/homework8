import React, {Component} from 'react';
import Timeline from "./parts/Timeline/Timeline";
import bg from "../../assets/img/aboutUs-bg.png"
import './AboutUs.scss'

class AboutUs extends Component {
    render() {
        return (
            <section className='about-us flex' id='aboutUs'>
                <Timeline/>
                <img className='town' src={bg} alt=""/>
            </section>
        );
    }
}

export default AboutUs;