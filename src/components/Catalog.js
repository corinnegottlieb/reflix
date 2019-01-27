import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Movie from './Movie';


class Catalog extends Component {
    
    
    render() {
        const movies = this.props.movies
        const budget = this.props.budget
        return (<div id="catalog">
            <input value ={this.props.text} onChange={this.props.updateText}></input>
            <button>Search</button>
            <div>Budget:{budget}</div>
            {budget < 100 ?
                <div>
                    <div>Rented:</div>
                    <div className="catalog-results">
                    {movies.filter(m => m.isRented).map(m => {
                        return (<Movie movie={m} rentMovie={this.props.rentMovie} />)
                    })}
                    </div>
                </div>
                : null}
            <div>Catalog:</div>
            <div className="catalog-results">
            {movies.map(m => {
                return (<Movie key={m.id} movie={m} rentMovie={this.props.rentMovie} />)
            })}
            </div>
        </div>

        )
    }
}

export default Catalog