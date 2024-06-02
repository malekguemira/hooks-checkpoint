import React from 'react';
import { useNavigate } from 'react-router-dom';

function MoviesCard(props){
  const navigate = useNavigate();
    return(
        <div class="card" style={{width: "30%"}} onClick={() => navigate(`/view/${props.Movie.id}`)} >
          <img src={props.Movie.postUrl} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{props.Movie.title}"</h5>
            <p class="card-text">{props.Movie.description}</p>
            <a href="#" class="btn btn-primary">{props.Movie.rating}</a>
          </div>
        </div>
    )

}
export default MoviesCard;