// import ret from 'bluebird/js/release/util'
import React, { Component } from 'react'
import '../styles/MovieDetail.css'

export class MovieDetail extends Component {


    getMovie = () => {
        for (let m of this.props.movies) {
            if (m.title === this.props.match.params.movieTitle) {
                console.log(m);
                return m
            }
        }
    }


    render() {
        return (
            <div className='MovieDetails'>
                <br />
                <br />
                <h3>{this.props.match.params.movieTitle} - {this.getMovie().year}</h3>
                <img src={this.getMovie().img} alt="Italian Trulli"></img>
                <br />
                <p>{this.getMovie().descrShort}</p>
            </div>
        )
    }
}

export default MovieDetail
