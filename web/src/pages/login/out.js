import React, { Component } from 'react';
import cookie from 'react-cookies'
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

    async componentDidMount() {

        await cookie.remove('cN_log')

        await cookie.remove('cN_usr')

        await cookie.remove('cN_usrNm')

    }

    render() {

        return (

            <Redirect to="/login" />

        )

    }


}