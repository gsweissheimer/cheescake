import React, { Component } from 'react';
import cookie from 'react-cookies'

import { connect } from "react-redux";

import * as Actions from '../../store/actions'

import api from "../../services/api";

import Header from '../../components/Header';
import Loader from '../../components/Loader';
import HeadNews from '../../components/HeadNews';
import SecondaryNews from '../../components/SecondaryNews';
import LastNews from '../../components/LastNews';

import './index.css';

class News extends Component {

    constructor(props) {

      super(props);
      
    }

    componentDidMount = async () => {

        this.restartView()

    }

    componentDidUpdate = async () => {

        document.getElementById("dashboard-news").classList.add('hidded')

        document.getElementById('newsLoader').classList.remove('hidded')

        this.restartView()

    }

    restartView = () => {

        const category = window.location.pathname.split('/')[1];

        this.getNews(category)

    }

    setNews = async (news) => {
    
        const big = news.data.slice(0,1)[0]

        const medium = news.data.slice(1,3)

        const small = news.data.slice(2,5)

        await this.props.dispatch(Actions.toggleNews(big, medium, small))

    }

    getNews = async (category) => {

        if (category === 'news' || category === '') {

            if (this.props.log) {

                var userPreferences = await api.get('users/' + this.props.userInfos.username)
    
                var news = await api.get('/userNews/' + userPreferences.data[0].politics + '/' + userPreferences.data[0].business + '/' + userPreferences.data[0].tech + '/' + userPreferences.data[0].science + '/' + userPreferences.data[0].sports)

                if(news.data[0]) {

                    this.setNews(news)

                }

            } else {

                var news = await api.get('/news')

                this.setNews(news)

            }
            
        } else {

            var news = await api.get('/news/' + category)

            this.setNews(news)


        }

        const dashboardNews = document.getElementById("dashboard-news")

        setTimeout(() => {

            document.getElementById('newsLoader').classList.add('hidded')

            dashboardNews.classList.remove('hidded')
            
        }, 300)

    }


    render() {

        return (

            <div className="container">
    
                <Header logLink={ this.props.log ? "/welcome" : "/login" } logTitle={ this.props.log ? this.props.userInfos.username : "Login" } />

                <Loader />
            
                <div id="dashboard-news" className="dashboard hidded">

                    <HeadNews />

                    <SecondaryNews />

                    <LastNews />
                        
                </div>

            </div>

        )
    }

}

export default  connect( state => ({ log: state.logStatus, userInfos: state.userInfos }) )(News)