import React, { Component, useState, useEffect } from 'react';

import api from "../../services/api";

import Header from '../../components/Header';
import Loader from '../../components/Loader/news';

import './index.css';

export default class Dashboard extends Component {

    state = {
        
        news: []
    };

    async componentDidMount() {

        const category = window.location.pathname.split('/')[1];

        this.getNews(category)

    }

    getNews = async (category) => {

        const news = await api.get('/news/' + category);

        this.setState({

            news: news.data.slice(0,6)

        })

        const dashboardNews = document.getElementById("dashboard-news")
                    
        this.state.news.map( (e,i) => (

            dashboardNews.insertAdjacentHTML("beforeend", this.handleNews(e,i))

        ))

        //document.getElementById('newsLoader').remove()

        dashboardNews.classList.remove('hidded')



    }

    defineColor = (category) => {

        var color

        switch (category) {

            case "Sports":
                color = 'orange';
                break;

            case "Tech":
                color = 'blue';
                break;

            case "Science":
                color = 'green';
                break;

            case "Business":
                color = 'purple';
                break;

            case "Politics":
                color = 'red';
                break;

        }

        return color

    }

    handleNews = (news,index) => {

        var bigTemplate = `<div id=${news._id} class="news big">
                                <h6 class="${  this.defineColor(news.category) }">${  news.category }</h6>
                                <img src="${ news.urlToImage }" alt=""/>
                                <a target="blank" href="${ news.url }"><h2>${ news.title }</h2></a>
                                <div class="author">
                                    <img src="https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg" alt=""/>
                                    <p>by ${ news.author }</p>
                                </div>
                                <p>${ (news.description) }</p>
                            </div>`

        var mediumTemplate = `
                                <div id=${news._id} class="news medium">
                                    <h6 class="${  this.defineColor(news.category) }">${  news.category }</h6>
                                    <img src="${ news.urlToImage }" alt=""/>
                                    <a target="blank" href="${ news.url }"><h2>${ news.title }</h2></a>
                                    <div class="author">
                                        <img src="https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg" alt=""/>
                                        <p>by ${ news.author }</p>
                                    </div>
                                    <p>${ (news.description) }</p>
                                </div>`

        var smallTemplate = `
                                <div id=${news._id} class="news small">
                                    <h6 class="${  this.defineColor(news.category) }">${  news.category }</h6>
                                    <a target="blank" href="${ news.url }"><h2>${ news.title }</h2></a>
                                    <div class="author">
                                        <img src="https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg" alt=""/>
                                        <p>by ${ news.author }</p>
                                    </div>
                                    <p>${ (news.description) }</p>
                                </div>`
        
        var lineTemplate = `<div class="line"></div>`

        switch (index) {
            case 0:
                return bigTemplate
                break;
            case 1:
                return mediumTemplate
                break;
            case 2:
                return mediumTemplate += lineTemplate
                break;
            default:
                return smallTemplate
                break;
        }

    }


    render() {

        return (

            <div className="container">

                <Header />
            
                <div id="dashboard-news" className="dashboard hidded">
                        
                </div>

            </div>

        )
    }

}