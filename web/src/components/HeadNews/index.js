import React from "react";

import { connect } from "react-redux";

import './index.css'

const HeadNews = ({ headNews }) => (

    <div className="news big">

        <h6 className={  headNews.category.toLowerCase() }>{  headNews.category }</h6>

        <img src={ headNews.urlToImage } alt="News cover image"/>

        <a target="blank" href={ headNews.url }><h2>{ headNews.title }</h2></a>

        <div className="author">

            <img src={ headNews.author_img } alt="Article author picture"/>

            <p>by { headNews.author }</p>

        </div>

        <p>{ headNews.description }</p>
        
    </div>

)

export default connect( state => ({ headNews: state.headNews }) )(HeadNews)