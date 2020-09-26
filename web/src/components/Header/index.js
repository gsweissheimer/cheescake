import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.png';
import close from '../../assets/images/close.png';

export default class Header extends Component {
    
    openMenu = () => {
    
        document.getElementById('aside-menu').classList.add('opened')

        document.querySelector('.menu').src = close
        
    }
    
    closeMenu = () => {
    
        document.getElementById('aside-menu').classList.remove('opened')

        document.querySelector('.menu').src = menu
        
    }

    handleMenu = () => {
    
        document.getElementById('aside-menu').classList.contains('opened') ? this.closeMenu() : this.openMenu()
    
    }

    render() {

        return (

            <div>
    
                <header id="main-header">
    
                    <img src={menu} onClick={this.handleMenu} className="menu" alt="menu icon"/>
    
                    <img src={logo} className="logo" alt="company brand"/>
    
                    <div></div>
    
                </header>
    
                <aside id="aside-menu">
    
                        <Link to="/">POLITICS</Link>
    
                        <Link to="/">BUSINESS</Link>
    
                        <Link to="/">TECH</Link>
    
                        <Link to="/">SCIENCE</Link>
    
                        <Link to="/">SPORTS</Link>
    
                        <Link to="/">LOGIN</Link>
    
                </aside>
    
            </div>

        )}

}