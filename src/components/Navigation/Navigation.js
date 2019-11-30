import React, {Component} from 'react';
import NavigationElement from "../NavigationElement/NavigationElement";
import Logo from "../Logo/Logo";
import './Navigation.scss'

class Navigation extends Component {
    render() {
        return (
            <nav className='navigation flex'>
                <NavigationElement title='Home'/>
                <NavigationElement title='About Us'/>
                <NavigationElement title='Team'/>
                <Logo/>
                <NavigationElement title='Services'/>
                <NavigationElement title='Blog'/>
                <NavigationElement title='Contact Us'/>
            </nav>
        );
    }
}

export default Navigation;