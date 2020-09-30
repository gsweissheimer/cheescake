import React, { Component } from 'react';
import cookie from 'react-cookies'

import api from "../../services/api";

import Header from '../../components/Header';
import Loader from '../../components/Loader';
import HeadNews from '../../components/HeadNews';
import SecondaryNews from '../../components/SecondaryNews';
import LastNews from '../../components/LastNews';

import './index.css';

class Dashboard extends Component {

    async componentDidMount() {

        const category = window.location.pathname.split('/')[1];

        this.getNews(category)

    }

    getNews = async (category) => {

        var cok = cookie.load('cN_log')

        var usr = cookie.load('cN_usr')

        var nam = cookie.load('cN_usrNm')

        if (!cok || !usr) {

            if (category === 'news') {

                category = ""
                
            }

            var news = await api.get('/news/' + category)

            this.setState({
    
                news: news.data.slice(0,6)
    
            })

        } else {

            var userPreferences = await api.get('users/' + usr)

            var news = await api.get('/userNews/' + userPreferences.data[0].politics + '/' + userPreferences.data[0].business + '/' + userPreferences.data[0].tech + '/' + userPreferences.data[0].science + '/' + userPreferences.data[0].sports)

            this.setState({
    
                news: news.data.slice(0,3),
                loginButton: nam
    
            })

        }

        const dashboardNews = document.getElementById("dashboard-news")

        document.getElementById('newsLoader').remove()

        dashboardNews.classList.remove('hidded')



    }


    render() {

        return (

            <div className="container">

                <Header />

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

export default Dashboard