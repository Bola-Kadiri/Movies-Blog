import React from 'react';
import { useState } from 'react'

const Addmovie = ({findMovie}) => {

    const [movie, setMovie] = useState('');

    const onSubmit = (e)=>{

        e.preventDefault();
        if(!movie){
            alert('Type A Title ')
            return
        }

        findMovie(movie)
        setMovie('')
        
    }

    return (
       <form className="form-control" onSubmit={onSubmit}>
           <input type="text" value= {movie} onChange={(e)=> setMovie(e.target.value)} className="input-search"/>
       </form>
    )
}

export default Addmovie