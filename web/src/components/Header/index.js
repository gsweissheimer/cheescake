import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies'
import { connect } from "react-redux";

import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.png';
import close from '../../assets/images/close.png';

import './index.css';


const Header = ({ interests }) =>  {
    
    var openMenu = () => {
    
        document.getElementById('aside-menu').classList.add('opened')
    
        document.querySelector('.menu').src = close
        
    }
    
    var closeMenu = () => {
    
        document.getElementById('aside-menu').classList.remove('opened')
    
        document.querySelector('.menu').src = menu
        
    }
    
    var handleMenu = () => {
    
        //document.getElementById('aside-menu').classList.contains('opened') ? closeMenu() : openMenu()
    
    }
    
    var defineLogInOut = () => {
    
        var cok = cookie.load('cN_log')
    
        var usr = cookie.load('cN_usr')
    
        var nam = cookie.load('cN_usrNm')
    
        if (cok && usr && nam) {
    
            return true
            
        }
    
    }

    return (

        <div id="main-header">

            <header>

                <img src={ menu } onClick={ handleMenu() } className="menu" alt="Menu Icon"/>

                <Link to="/">
                    
                    <img src={ logo } className="logo" alt="Company Brand"/>

                </Link>

                <aside id="aside-menu">

                    { interests.map((e,i) => (

                        <Link key={e._id} to={ '/' + e.name }>{ e.name }</Link>

                    )) }

                    <Link to={ defineLogInOut() ? "/logout" : "/login" }>Login</Link>

                </aside>

            </header>

        </div>
    )

}

export default connect( state => ({ interests: state.interests }) )(Header)