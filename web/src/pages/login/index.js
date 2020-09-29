import React, { Component } from 'react';
import api from '../../services/api'
import cookie from 'react-cookies'

import Header from '../../components/Header';

import './index.css';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

    state = {
        
        logged: false,
        loginButton: "Login"

    };


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

            if (!status.data.error) {

                var userInfo =  await api.get('/users/'+user)
        
                await cookie.save('cN_log', status.data.token, { path: '/' })
        
                await cookie.save('cN_usr', user, { path: '/' })
        
                await cookie.save('cN_usrNm', userInfo.data[0].name, { path: '/' })

                this.setState({
        
                    logged: true
        
                })

            } else {

                alert(status.data.error)

            }

        }

    }

    render() {
        
        if (this.state.logged === true) {

            return (

                <Redirect to="/welcome" />

            )
            
        } else {

            return (

                <div className="container">

                    <Header userName="" />
                
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
                            
                    </div>

                </div>

            )

        }
    }

}