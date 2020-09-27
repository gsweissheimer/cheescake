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

            <div id="main-header">
    
                <header>
    
                    <img src={menu} onClick={this.handleMenu} className="menu" alt="menu icon"/>
    
                    <img src={logo} className="logo" alt="company brand"/>
    
                    <aside id="aside-menu">
                            
                            <Link to="/news/politics">POLITICS</Link>

                            <Link to="/news/business">BUSINESS</Link>

                            <Link to="/news/tech">TECH</Link>

                            <Link to="/news/science">SCIENCE</Link>

                            <Link to="/news/sports">SPORTS</Link>

                            <Link to="/login">LOGIN</Link>

                    </aside>
    
                </header>
    
            </div>

        )}

}