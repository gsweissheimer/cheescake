import React, { Component } from 'react';

import Header from '../../components/Header';

import './index.css';

export default class Dashboard extends Component {


    render() {

        return (

            <div className="container">

                <Header />
            
                <div className="dashboard-news">
                    
                    <div className="news big">
                        <h6>Categoria</h6>
                        <img src="" alt=""/>
                        <h2></h2>
                        <div className="author">
                            <img src="" alt=""/>
                            <p>by Creed Dantas</p>
                        </div>
                    </div>
                    <div className="news medium">
                        new
                    </div>
                    <div className="news medium">
                        new
                    </div>
                    <div className="news small">
                        new
                    </div>
                    <div className="news small">
                        new
                    </div>
                    <div className="news small">
                        new
                    </div>
                        
                </div>

            </div>

        )
    }

}