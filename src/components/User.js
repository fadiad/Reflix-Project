import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/User.css'


export class User extends Component {

    render() {
        return (
            <Link to='/Catalog'>
                <div className='user' style={{ backgroundColor: this.props.user.color }}>
                    {this.props.user.name}
                </div>
            </Link>

        )
    }
}

export default User
