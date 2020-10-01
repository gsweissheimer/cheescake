import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies'
import { connect } from "react-redux";

import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.png';
import close from '../../assets/images/close.png';

import './index.css';
    
var openMenu = () => {

    document.getElementById('asideMenu').classList.add('opened')

    document.querySelector('.menu').src = close
    
}

var closeMenu = () => {

    document.getElementById('asideMenu').classList.remove('opened')

    document.querySelector('.menu').src = menu
    
}

var handleMenu = () => {

    document.getElementById('asideMenu').classList.contains('opened') ? closeMenu() : openMenu()

}


const Header = (props) =>  {

    return (

        <div id="main-header">

            <header>

                <img src={ menu } onClick={ () => handleMenu() } className="menu" alt="Menu Icon"/>

                <Link to="/"><img src={ logo } className="logo" alt="Company Brand"/></Link>

                <aside id="asideMenu">

                    { props.interests.map((e,i) => ( <Link key={e._id} onClick={ () => handleMenu() } to={ '/' + e.name }>{ e.name }</Link> )) }

                    <Link to={ props.logLink }>{ props.logTitle }</Link>

                </aside>

            </header>

        </div>
    )

}

export default connect( state => ({ interests: state.interests, log: state.logStatus, userInfos: state.userInfos }) )(Header)