import React from "react";

import { connect } from "react-redux";

const MainDashboard = (props) => (

    <form className="form">

        <input type="hidden" name="userId" id="userId" value={ props.userInfos._id } />

        { props.interests.map(interest => (

            <input key={ interest._id } type="checkbox" name={ interest.name.toLowerCase() } id={ interest.name.toLowerCase() } value={ interest.status } />

        )) }

        <input type="submit" onClick={ props.saveInterest.bind() } value="SAVE" className="button"/>

    </form>

)

export default connect( state => ({ interests: state.interests, userInfos: state.userInfos }) )(MainDashboard)