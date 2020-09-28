import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './index.css';

import Loader from '../../components/Loader/header';

import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.png';
import close from '../../assets/images/close.png';

export default class Header extends Component {

    state = {
        
        categories: []
    };

    async componentDidMount() {

        const news = await axios.get('http://newsapi.org/v2/top-headlines?country=us&apiKey=d8e8fad17815471c9812da5bc8d22069');

        var categories = [];

        news.data.articles.map((e,i) => {
            
            if(!categories.includes(e.source.name)) categories.push(e.source.name)

        })

        this.setState({

            categories: categories.slice(0,6)

        })

        console.log(this.state.categories)

    }
    
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

                        { this.state.categories.map(category => (
                            
                            <Link to="/news/politics">{ category.toUpperCase() }</Link>

                        )) }

                            <Link to="/login">LOGIN</Link>

                    </aside>
    
                </header>
    
            </div>

        )}

}