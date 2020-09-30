import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';

import { connect } from "react-redux";

import * as Actions from '../../store/actions'

import api from '../../services/api';

import Header from '../../components/Header'
import MainDashboard from '../../components/MainDashboard'
import FormDashboard from '../../components/FormDashboard'

import './index.css';

class Dashboard extends Component {

    constructor(props) {

      super(props);
      
    }

    componentDidMount = async () => {

        this.restartView()

    }

    componentDidUpdate = async () => {

        this.restartView()

    }

    restartView = async () => {

        var userInfo =  await api.get('/users/' + this.props.user.username)

        await this.props.dispatch(Actions.toggleInterests(userInfo.data[0]))

    }


    saveInterest = async (event) => {
    
        event.preventDefault();
        
        var body = {

            politics: document.getElementById('politics').value,
            business: document.getElementById('business').value,
            tech: document.getElementById('tech').value,
            science: document.getElementById('science').value,
            sports: document.getElementById('sports').value
            
        }

        await api.put('users/' + document.getElementById('userId').value, body)

        await this.props.dispatch(Actions.toggleInterests(body))

        document.getElementById('homebtn').click()

    }

    handleClick = (interest) => {

        let btn = document.querySelector('button.' + interest.class)

        if (btn.classList.contains('interested')) {

            btn.classList.remove('interested')

            document.getElementById(interest.name.toLowerCase()).value = false

        } else {

            btn.classList.add('interested')

            document.getElementById(interest.name.toLowerCase()).value = true

        }

    }

    render() {
        
        if ( !this.props.log ) {

            return (

                <Redirect to="/login" />

            )

        } else {

            return (
    
                <div className="container">
    
                    <Header logLink={ this.props.log ? "/logout" : "/login" } logTitle={ this.props.log ? "Logout" : "Login" } />
            
                    <div className="dashboard-info">
    
                        <MainDashboard handleClick={ this.handleClick } />
    
                        <FormDashboard saveInterest={ this.saveInterest } />
                            
                        <Link to="/" id="homebtn" className="button secondary">BACK TO HOME</Link>
                            
                    </div>
                
                </div>
    
            )

        }
    }

}

export default  connect( state => ({ log: state.logStatus, user: state.userInfos }) )(Dashboard)