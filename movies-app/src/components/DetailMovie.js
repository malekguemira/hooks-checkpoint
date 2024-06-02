import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movies from '../Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DetailMovie.css';

function DetailMovie () {
    const [IsLoaded , setIsLoaded] = useState(false)
    const [Movie , setMovie] = useState({
        id : "",
        title:"", 
        description:"", 
        postUrl:"",
        VideoLink : "",
        rating: 0
    });
    const params = useParams();
    useEffect(() => {
            const M =  Movies.find(m => m.id === params.id);
            setMovie(
                {   
                    id : M.id,
                    title:M.title, 
                    description:M.description, 
                    postUrl:M.postUrl,
                    VideoLink :M.VideoLink,
                    rating: M.rating
                } ) ;
        setIsLoaded(true);
        console.log(Movie);
    },[IsLoaded])

    return (
        <div className="container movie-detail">
        {IsLoaded && (
            <>
                <h1 className="text-center">{Movie.title}</h1>
                <div>
                    <iframe
                        src={Movie.VideoLink}
                        className="w-100 video-frame"
                        allowFullScreen
                        title={Movie.title}
                    ></iframe>
                </div>
            </>
        )}
    </div>
    
    
    );
    
}
export default DetailMovie;