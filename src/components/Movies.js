import React from 'react'
import Movie from './Movie'

const Movies = ({ movies, imgpath }) => {
    return (
        <div className="movie-rack">
        {movies.map((movie)=>(
            <Movie key={movie.id} movie={movie} imgpath={imgpath}/>
        ))}
        </div>
    )
}

export default Movies