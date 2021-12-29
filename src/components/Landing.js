// import ret from 'bluebird/js/release/util';
import React, { Component } from 'react';
import User from './User'

import '../styles/Landing.css'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { id: 0, name: "Fadi", color: '#008B8B', budget: 100, movies: [] },
                { id: 1, name: "Osama", color: '#2F4F4F', budget: 100, movies: [] },
                { id: 2, name: "Hadi", color: '#696969', budget: 100, movies: [] },
                { id: 3, name: "Mohamad", color: '#FA8072', budget: 100, movies: [] },
            ]
        }
    }

    render() {
        return (
            <div id='main'>
                <br /><br /><br />
                <h2> Whow is watching ?!</h2>
                <br /><br />
                <div id='users'>
                    {
                        this.state.users.map(u => {
                            return (
                                <User user={u} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Landing;