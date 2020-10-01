import React, { Component } from 'react';
import cookie from 'react-cookies'
import { Redirect } from 'react-router-dom';

import { connect } from "react-redux";

import * as Actions from '../../store/actions'

class Logout extends Component {

    constructor(props) {

      super(props)
      
    }

    async componentWillMount() {

        await cookie.remove('cN_log')

        await cookie.remove('cN_usr')

        await cookie.remove('cN_usrNm')

        await this.props.dispatch(Actions.toggleLog(false))

    }

    render() {

        return (

            <Redirect to="/login" />

        )

    }


}

export default  connect()(Logout)