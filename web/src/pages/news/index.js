import React, { Component } from 'react';
import axios from "axios";

import Header from '../../components/Header';
import Loader from '../../components/Loader/news';

import './index.css';

export default class Dashboard extends Component {

    state = {
        
        news: []
    };

    async componentDidMount() {

        const news = await axios.get('http://newsapi.org/v2/top-headlines?country=us&apiKey=d8e8fad17815471c9812da5bc8d22069');

        this.setState({

            news: news.data.articles.slice(0,6)

        })

        this.getNews()

    }

    getNews = () => {

        const dashboardNews = document.getElementById("dashboard-news")
                    
        this.state.news.map( (e,i) => (

            dashboardNews.insertAdjacentHTML("beforeend", this.handleNews(e,i))

        ))

        document.getElementById('newsLoader').remove()

        dashboardNews.classList.remove('hidded')



    }

    defineColor = () => {

        console.log();

    }

    handleNews = (news,index) => {

        var bigTemplate = `<div id=${news._id} class="news big">
                                <h6 class="red">${ news.source.name }</h6>
                                <img src="${ news.urlToImage }" alt=""/>
                                <a target="blank" href="${ news.url }"><h2>${ news.title }</h2></a>
                                <div class="author">
                                    <img src="https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg" alt=""/>
                                    <p>by ${ news.author }</p>
                                </div>
                                <p>${ news.description }</p>
                            </div>`

        var mediumTemplate = `
                                <div id=${news._id} class="news medium">
                                    <h6 class="red">${ news.source.name }</h6>
                                    <img src="${ news.urlToImage }" alt=""/>
                                    <a target="blank" href="${ news.url }"><h2>${ news.title }</h2></a>
                                    <div class="author">
                                        <img src="https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg" alt=""/>
                                        <p>by ${ news.author }</p>
                                    </div>
                                    <p>${ news.description }</p>
                                </div>`

        var smallTemplate = `
                                <div id=${news._id} class="news small">
                                    <h6 class="red">${ news.source.name }</h6>
                                    <a target="blank" href="${ news.url }"><h2>${ news.title }</h2></a>
                                    <div class="author">
                                        <img src="https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg" alt=""/>
                                        <p>by ${ news.author }</p>
                                    </div>
                                    <p>${ news.description }</p>
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

                <Loader />
            
                <div id="dashboard-news" className="dashboard hidded">
                        
                </div>

            </div>

        )
    }

}