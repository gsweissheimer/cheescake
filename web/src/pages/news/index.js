import React, { Component } from 'react';

import Header from '../../components/Header';
import Loader from '../../components/Loader';

import './index.css';

export default class Dashboard extends Component {

    state = {
        
        news: [{
            "_id": "5f6fb71d19cb3d267c5275cf",
            "title": "Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps",
            "description": "<p>One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.</p>",
            "cover": "https://techcrunch.com/wp-content/uploads/2019/01/tusimple-truck.jpg?w=700&crop=1",
            "category": "Tech",
            "author_img": "https://pm1.narvii.com/6603/09dadef8df7a3417608a2b00599e1df2b078fc60_hq.jpg",
            "author": "Kirsten Korosec"
          },{
            "_id": "5f6fb71d19cb3d267c5275cf",
            "title": "Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps",
            "description": "<p>One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.</p>",
            "cover": "https://techcrunch.com/wp-content/uploads/2019/01/tusimple-truck.jpg?w=700&crop=1",
            "category": "Politics",
            "author_img": "https://pm1.narvii.com/6603/09dadef8df7a3417608a2b00599e1df2b078fc60_hq.jpg",
            "author": "Kirsten Korosec"
          },{
            "_id": "5f6fb71d19cb3d267c5275cf",
            "title": "Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps",
            "description": "<p>One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.</p>",
            "cover": "https://techcrunch.com/wp-content/uploads/2019/01/tusimple-truck.jpg?w=700&crop=1",
            "category": "Science",
            "author_img": "https://pm1.narvii.com/6603/09dadef8df7a3417608a2b00599e1df2b078fc60_hq.jpg",
            "author": "Kirsten Korosec"
          },{
            "_id": "5f6fb71d19cb3d267c5275cf",
            "title": "Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps",
            "description": "<p>One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.</p>",
            "cover": "https://techcrunch.com/wp-content/uploads/2019/01/tusimple-truck.jpg?w=700&crop=1",
            "category": "Business",
            "author_img": "https://pm1.narvii.com/6603/09dadef8df7a3417608a2b00599e1df2b078fc60_hq.jpg",
            "author": "Kirsten Korosec"
          },{
            "_id": "5f6fb71d19cb3d267c5275cf",
            "title": "Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps",
            "description": "<p>One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.</p>",
            "cover": "https://techcrunch.com/wp-content/uploads/2019/01/tusimple-truck.jpg?w=700&crop=1",
            "category": "Sports",
            "author_img": "https://pm1.narvii.com/6603/09dadef8df7a3417608a2b00599e1df2b078fc60_hq.jpg",
            "author": "Kirsten Korosec"
          },{
            "_id": "5f6fb71d19cb3d267c5275cf",
            "title": "Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps",
            "description": "<p>One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.</p>",
            "cover": "https://techcrunch.com/wp-content/uploads/2019/01/tusimple-truck.jpg?w=700&crop=1",
            "category": "Tech",
            "author_img": "https://pm1.narvii.com/6603/09dadef8df7a3417608a2b00599e1df2b078fc60_hq.jpg",
            "author": "Kirsten Korosec"
          }]
    };

    componentDidMount() {

        this.getNews()

    }

    getNews = () => {
                    
        this.state.news.map( (e,i) => (

            document.getElementById("dashboard-news").insertAdjacentHTML("beforeend", this.handleNews(e,i))

        ))

    }

    defineColor = () => {

        console.log();

    }

    handleNews = (news,index) => {

        var bigTemplate = `<div id=${news._id} class="news big">
                                <h6 class="${ news.category.toLowerCase() }">${ news.category }</h6>
                                <img src="${ news.cover }" alt=""/>
                                <h2>${ news.title }</h2>
                                <div class="author">
                                    <img src="${ news.author_img }" alt=""/>
                                    <p>by ${ news.author }</p>
                                </div>
                                ${ news.description }
                            </div>`

        var mediumTemplate = `
                                <div id=${news._id} class="news medium">
                                    <h6 class="${ news.category.toLowerCase() }">${ news.category }</h6>
                                    <img src="${ news.cover }" alt=""/>
                                    <h2>${ news.title }</h2>
                                    <div class="author">
                                        <img src="${ news.author_img }" alt=""/>
                                        <p>by ${ news.author }</p>
                                    </div>
                                    ${ news.description }
                                </div>`

        var smallTemplate = `
                                <div id=${news._id} class="news small">
                                    <h6 class="${ news.category.toLowerCase() }">${ news.category }</h6>
                                    <h2>${ news.title }</h2>
                                    <div class="author">
                                        <img src="${ news.author_img }" alt=""/>
                                        <p>by ${ news.author }</p>
                                    </div>
                                    ${ news.description }
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
            
                <div id="dashboard-news" className="dashboard">
                        
                </div>

            </div>

        )
    }

}