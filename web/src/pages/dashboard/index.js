import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import './index.css';

export default class Dashboard extends Component {

    state = {
        username: "Guilherme Weissheimer",
        interests: [{
            _id: 321,
            name: "Politics",
            color: "red",
            status: 0
        },{
            _id: 322,
            name: "Business",
            color: "purple",
            status: 1
        },{
            _id: 323,
            name: "Tech",
            color: "blue",
            status: 1
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

    componentDidMount() {

        this.state.interests.map((e,i) => {

            if (e.status === 1) { 
            
                document.querySelector('.' + e.color).classList.add('interested')

                document.getElementById(e.name.toLowerCase()).checked = true

            }

        });

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

                <Header />
            
                <div className="dashboard-info">

                    <h1 className="title">WELCOME, <span className="color-blue">{username}</span></h1>

                    <div className="content">

                        <h2>MY INTERESTS</h2>

                        <div className="options">

                            { interests.map(interest => (

                                    <button key={interest._id} onClick={this.handleClick.bind(this, interest)} className={interest.color} >
                                        {interest.name}
                                    </button>

                            )) }

                        </div>

                    </div>

                    <form className="form">

                        <input type="checkbox" name="politics" id="politics"/>
                        <input type="checkbox" name="business" id="business"/>
                        <input type="checkbox" name="tech" id="tech"/>
                        <input type="checkbox" name="science" id="science"/>
                        <input type="checkbox" name="sports" id="sports"/>
                        
                        <input type="submit" value="SAVE" className="button"/>

                    </form>
                        
                    <Link to="/" className="button secondary">BACK TO HOME</Link>
                        
                </div>

            </div>

        )
    }

}