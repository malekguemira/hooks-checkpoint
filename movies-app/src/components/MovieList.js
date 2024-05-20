import React from 'react';
import MovieCard from './MovieCard';



function MovieList(props){
    return(
        <div>
            {
                props.Movies.map(
                    (m)=>

                    <MovieCard Movie={m}/>
                )
            } 
        </div> 
    )
}
export default MovieList;