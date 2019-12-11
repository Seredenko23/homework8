import React, {Component} from 'react';
import NavigationElement from "./parts/NavigationElement/NavigationElement";
import Logo from "./parts/Logo/Logo";
import './Navigation.scss'

class Navigation extends Component {
    render() {
        return (
            <nav className='navigation flex'>
                <NavigationElement href='#home' title='Home'/>
                <NavigationElement href='#aboutUs' title='About Us'/>
                <NavigationElement href='#team' title='Team'/>
                <Logo/>
                <NavigationElement href='#services' title='Services'/>
                <NavigationElement href='#blog' title='Blog'/>
                <NavigationElement href='#contactUs' title='Contact Us'/>
            </nav>
        );
    }
}

export default Navigation;