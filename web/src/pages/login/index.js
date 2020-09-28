import React, { Component } from 'react';

import Header from '../../components/Header';

import './index.css';

export default class Login extends Component {

    render() {

        return (

            <div className="container">

                <Header />
            
                <div className="login-info">

                    <h1 className="title">USER AREA</h1>

                    <form className="form">

                        <div className="field">
                            <label className="label">USERNAME</label>
                            <input type="text" className="input"/>
                        </div>

                        <div className="field">
                            <label className="label">PASSWORD</label>
                            <input type="text" className="input"/>
                        </div>

                        <input type="submit" value="LOGIN" className="button"/>

                    </form>
                        
                </div>

            </div>

        )
    }

}