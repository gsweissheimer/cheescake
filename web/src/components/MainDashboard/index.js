import React from "react";

import { connect } from "react-redux";
import Interests from '../Interests'

const MainDashboard = (props) => (

    <>

        <h1 className="title">WELCOME, <span className="color-blue"> { props.log.name } </span></h1>

        <div className="content">

            <h2>MY INTERESTS</h2>

            <div className="options">

                <Interests handleClick={ props.handleClick } />

            </div>

        </div>
        
    </>

)

export default connect( state => ({ log: state.userInfos }) )(MainDashboard)