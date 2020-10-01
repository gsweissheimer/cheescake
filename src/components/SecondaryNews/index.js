import React from "react";

import { connect } from "react-redux";

const SecondaryNews = ({ secondaryNews }) => (

    <>

        { secondaryNews.map((e,i) => (
        
            <div key={e._id} className="news medium">

                <h6 className={  e.category.toLowerCase() }>{  e.category }</h6>

                <img src={ e.urlToImage } alt="News cover image"/>

                <a target="blank" href={ e.url }><h2>{ e.title }</h2></a>

                <div className="author">

                    <img src="https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg" alt="Article author picture"/>

                    <p>by { e.author }</p>

                </div>

                <p>{ e.description }</p>

            </div>

        )) }

        <div className="line"></div>
        
    </>

)

export default connect( state => ({ secondaryNews: state.secondaryNews }) )(SecondaryNews)