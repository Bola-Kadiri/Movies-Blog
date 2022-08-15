import React from 'react'

const Movie = ({movie, imgpath}) => {
    return (
        <div className="movie-card">
            <img src={imgpath + movie.poster_path} alt=""/>
            <div className="info">
               <h2>{movie.title}</h2>
               <h3 className= {movie.vote_average >= 5 ? 'green' : 'red'}>{movie.vote_average}</h3>
            </div>
        
            <div className='overview'>
                <h3>Overview:</h3>
                {movie.overview}
            </div>
        </div>
    )
}

export default Movie