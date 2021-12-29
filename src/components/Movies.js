import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import '../styles/movie.css'

class Movies extends Component {

    chanchStatus = () => {
        console.log(' + has been clicked');
        this.props.isRented(this.props.movie.id)
    }

    render() {
        return (
            <div className='movie'>
                {this.props.movie.isRented === false
                    ? <AiFillPlusCircle className='icon' onClick={this.chanchStatus} />
                    : <AiOutlineMinusCircle className='icon' onClick={this.chanchStatus} />
                }

                <Link to={`/Catalog/${this.props.movie.title}`}>
                    <img src={this.props.movie.img} alt="Italian Trulli"></img>
                </Link>
            </div>
        );
    }
}

export default Movies;



//     <AiFillPlusCircle className='icon' onClick={this.chanchStatus} />