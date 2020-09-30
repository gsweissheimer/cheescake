import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api'
import cookie from 'react-cookies'
import { Redirect } from 'react-router-dom';

import { connect } from "react-redux";

import * as Actions from '../../store/actions'

import Header from '../../components/Header';

import './index.css';

class Login extends Component {

    constructor(props) {

      super(props)
      
    }


    handleLoggin = async event => {

        event.preventDefault();

        var user = document.getElementById('user').value

        var pass = document.getElementById('pass').value

        if (!user != "" ) {

            alert('Please fill your username')

        } else if (!pass != "" ) {

            alert('Please fill your password')

        } else {

            var status = await api.post('/auth',{ username: user, password: pass })

            var token = status.data.token

            if (!status.data.error) {

                var userInfo =  await api.get('/users/'+user)
        
                await cookie.save('cN_log', token, { path: '/' })
        
                await cookie.save('cN_usr', user, { path: '/' })
        
                await cookie.save('cN_usrNm', userInfo.data[0].name, { path: '/' })

                await this.props.dispatch(Actions.toggleLog(true))

                await this.props.dispatch(Actions.toggleUserInfos(userInfo.data[0]._id, userInfo.data[0].name, user, token))

            } else {

                alert(status.data.error)

            }

        }

    }

    render() {
        
        if ( this.props.log ) {

            return (

                <Redirect to="/welcome" />

            )
            
        } else {

            return (

                <div className="container">

                    <Header />
                
                    <div className="login-info">

                        <h1 className="title">USER AREA</h1>

                        <form className="form">

                            <div className="field">
                                <label className="label">USERNAME</label>
                                <input id="user" type="text" className="input"/>
                            </div>

                            <div className="field">
                                <label className="label">PASSWORD</label>
                                <input id="pass" type="password" className="input"/>
                            </div>

                            <input onClick={this.handleLoggin} id="logginBtn" type="submit" value="LOGIN" className="button"/>

                        </form>
                            
                        <Link to="/" className="button secondary">BACK TO HOME</Link>
                            
                    </div>

                </div>

            )

        }
    }

}

export default  connect( state => ({ log: state.logStatus }) )(Login)