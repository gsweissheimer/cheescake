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
    
                    <Link to="/"><img src={logo} className="logo" alt="company brand"/></Link>
    
                    <aside id="aside-menu">

                        <Link to="/Politics">Politics</Link>

                        <Link to="/Business">Business</Link>

                        <Link to="/Tech">Tech</Link>

                        <Link to="/Science">Science</Link>

                        <Link to="/Sports">Sports</Link>

                        <Link to="/login">LOGIN</Link>

                    </aside>
    
                </header>
    
            </div>

        )}

}