import React, {Component} from 'react'

class MovieDetails extends Component{
render(){
    const movies =this.props.movies
    const id= this.props.match.params.id
 return(
     <div>
         <div>{movies[id].title}({movies[id].year})</div>
         <img src={movies[id].img}></img>
         <p>{movies[id].descrShort}</p>
     </div>
 )   
}
}

export default MovieDetails