import React from "react";

import { connect } from "react-redux";

const Interests = (props) => (

    <>

        { props.interests.map( interest => (

            <button key={ interest._id } id={ interest._id } onClick={ props.handleClick.bind(this, interest) } className={ interest.status ? interest.class + " interested" : interest.class } >

                { interest.name }

            </button>

        )) }
        
    </>

)

export default connect( state => ({ interests: state.interests }) )(Interests)