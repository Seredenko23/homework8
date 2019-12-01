import React, {Component} from 'react';
import Navigation from "../Navigation/Navigation";
import Headline from "../Headline/Headline";
import Button from "../Button/Button";
import GoDown from "../GoDown/GoDown";

import './Header.scss'

class Header extends Component {
    render() {
        return (
            <section className='header flex space-between' id='home'>
                <Navigation/>
                <Headline
                    header='We build it with passion'
                    description='Just to be clear, we do this for fun not for you, just kidding.'
                    size='big'>
                    <Button text='READ MORE'/>
                </Headline>
                <GoDown/>
            </section>
        );
    }
}

export default Header;