import React, { Component } from 'react';
import Movies from './Movies';
import '../styles/Catalog.css'


// import '../styles/Catalog.css'

class Catalog extends Component {

    constructor() {
        super()
        this.state = {
            searchedMovie: ' ',
            isSearching: false
        }
    }


    getNumOfRented = () => {
        for (let movie of this.props.movies) {
            if (movie.isRented === true) {
                return true
            }
        }
        return false
    }


    setSearchedMovie = (event) => {

        let movieTitle = event.target.value
        let _isSearching = false
        let _searchedMovie = ' '

        if (movieTitle.length != 0) {
            _isSearching = true
            for (let movie of this.props.movies) {
                if (movie.title === movieTitle) {
                    _searchedMovie = movie.title
                }
            }
        }

        this.setState({
            searchedMovie: movieTitle,
            isSearching: _isSearching
        }, function () {
            console.log(this.state.searchedMovie);
        })
    }

    getMovies = () => {
        let movies = []
        for (let m of this.props.movies) {
            if (m.title.toLowerCase().startsWith(this.state.searchedMovie.toLowerCase())) {
                movies.push(m)
            }
        }

        if (movies.length != 0) {
            return movies
        }
        return null
    }

    render() {
        return (
            <div >
                <div>
                    <br /><br />
                    <input type="text" placeholder='search' onChange={this.setSearchedMovie} />
                    <br /><br />
                    {
                        this.state.isSearching === true ? (this.getMovies() != null ?
                            <div className='searchedMovie'>
                                {
                                    this.getMovies().map(m => {
                                        return (<Movies movie={m} isRented={this.props.isRented} />)
                                    })
                                }
                            </div>
                            : <div>There is no movie in this title</div>)
                            : null
                    }

                </div>

                {this.state.isSearching === false ?
                    (this.getNumOfRented() === true ?
                        <div>
                            <div>Rented : </div><br />
                            <div className="rentedCatalog">
                                {
                                    this.props.movies.map(m => {
                                        return m.isRented === true ? (<Movies movie={m} isRented={this.props.isRented} />) : null
                                    })
                                }
                            </div>
                        </div>
                        : null
                    ) : null
                }

                <div className="Catalog">
                    {this.state.isSearching === false ?
                        (this.props.movies.map(m => {
                            return (<Movies movie={m} isRented={this.props.isRented} />)
                        })
                        )
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default Catalog;