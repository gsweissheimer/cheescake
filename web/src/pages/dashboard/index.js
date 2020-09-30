import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cookie from 'react-cookies'
import api from '../../services/api'

import Header from '../../components/Header'

import './index.css';

export default class Dashboard extends Component {

    state = {
        username: "",
        loginButton: "Login",
        interests: [{
            _id: 321,
            name: "Politics",
            color: "red",
            status: 0
        },{
            _id: 322,
            name: "Business",
            color: "purple",
            status: 0
        },{
            _id: 323,
            name: "Tech",
            color: "blue",
            status: 0
        },{
            _id: 324,
            name: "Science",
            color: "green",
            status: 0
        },{
            _id: 325,
            name: "Sports",
            color: "orange",
            status: 0
        }]
    }

    async componentDidMount() {

        var username = cookie.load('cN_usr');

        var name = cookie.load('cN_usrNm');

        if (cookie.load('cN_log') && name && username) {

            var userData = await api.get('/users/' + username )
            
            this.setState({
                
                interests: [{
                    _id: 321,
                    name: "Politics",
                    color: "red",
                    status: userData.data[0].politics
                },{
                    _id: 322,
                    name: "Business",
                    color: "purple",
                    status: userData.data[0].business
                },{
                    _id: 323,
                    name: "Tech",
                    color: "blue",
                    status: userData.data[0].tech
                },{
                    _id: 324,
                    name: "Science",
                    color: "green",
                    status: userData.data[0].science
                },{
                    _id: 325,
                    name: "Sports",
                    color: "orange",
                    status: userData.data[0].sports
                }],
                loginButton: username,
                username: name

            })
            
        }

        this.state.interests.map((e,i) => {

            if (e.status === 1) { 
            
                document.querySelector('.' + e.color).classList.add('interested')

                document.getElementById(e.name.toLowerCase()).checked = true

            }

        });
        
        this.defineButtonClass()

    }

    defineButtonClass = () => {
        
        this.state.interests.map((e,i) => {

            var button = document.getElementById(e._id)

            var input = document.getElementById(e.name.toLowerCase())

            button.classList.add(e.color)

            if (e.status) {

                button.classList.add('interested')

                input.checked = true
                
            }

        })
        
    }

    saveInterest = async event => {
    
        event.preventDefault();
        
        var user = this.state.loginButton

        var politics = document.getElementById('politics').checked

        var business = document.getElementById('business').checked

        var tech = document.getElementById('tech').checked

        var science = document.getElementById('science').checked

        var sports = document.getElementById('sports').checked
        
        //await api.post('')

    }

    handleClick = (interest) => {

        let btn = document.querySelector('button.' + interest.color)

        if (btn.classList.contains('interested')) {

            btn.classList.remove('interested')

            document.getElementById(interest.name.toLowerCase()).checked = false

        } else {

            btn.classList.add('interested')

            document.getElementById(interest.name.toLowerCase()).checked = true

        }

    }

    render() {

        const { username, interests } = this.state;

        return (

            <div className="container">

                <Header userName={this.state.loginButton} />
        
                <div className="dashboard-info">

                    <h1 className="title">WELCOME, <span className="color-blue">{username}</span></h1>

                    <div className="content">

                        <h2>MY INTERESTS</h2>

                        <div className="options">

                            { interests.map(interest => (

                                    <button key={interest._id} id={interest._id} onClick={this.handleClick.bind(this, interest)} >
                                        {interest.name}
                                    </button>

                            )) }

                        </div>

                    </div>

                    <form className="form">

                        <input type="hidden" name="_id" />

                        <input type="checkbox" name="politics" id="politics"/>
                        <input type="checkbox" name="business" id="business"/>
                        <input type="checkbox" name="tech" id="tech"/>
                        <input type="checkbox" name="science" id="science"/>
                        <input type="checkbox" name="sports" id="sports"/>
                        
                        <input type="submit" onClick={ this.saveInterest } value="SAVE" className="button"/>

                    </form>
                        
                    <Link to="/" className="button secondary">BACK TO HOME</Link>
                        
                </div>
            
            </div>

        )
    }

}