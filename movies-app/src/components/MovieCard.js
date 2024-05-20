import React from 'react';

function MoviesCard(props){
    return(
        <div class="card" style={{width: "30%"}}>
        <img src={props.Movie.postUrl} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{props.Movie.title}"</h5>
          <p class="card-text">{props.Movie.descreption}</p>
          <a href="#" class="btn btn-primary">{props.Movie.rating}</a>
        </div>
      </div>
    )

}
export default MoviesCard;