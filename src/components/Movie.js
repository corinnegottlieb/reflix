import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Movie extends Component {
    rentMovie =()=>{
        this.props.rentMovie(this.props.movie.id)
    }

    render() {
        const movie = this.props.movie
        return (
            <div className = "movie-box" key={movie.id}>
         <Link to={`/movies/${movie.id}`} movie={movie}><img className="catalog-movie" src={movie.img}></img></Link>  
                <i className={
                movie.isRented ? 
                "fas fa-minus-circle button": 
                "fas fa-plus-circle button" } 
                onClick={this.rentMovie} id={movie.id}></i>
            </div>)

    }
}

export default Movie