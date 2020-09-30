import React from "react";

import { connect } from "react-redux";

const LastNews = ({ lastNews }) => (

    <>

        { lastNews.map((e,i) => (
        
            <div key={e._id} className="news small">

                <h6 className={ e.category }>{  e.category }</h6>

                <a target="blank" href={ e.url }><h2>{ e.title }</h2></a>

                <div className="author">

                    <img src={ e.author_img } alt="Article author picture"/>

                    <p>by { e.author }</p>

                </div>
                
                <p>{ e.description }</p>

            </div>

        )) }
        
    </>

)

export default connect( state => ({ lastNews: state.lastNews }) )(LastNews)