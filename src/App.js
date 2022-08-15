import Header from './components/Header';
import { useState, useEffect } from 'react'
import Movies from './components/Movies';
import Addmovie from './components/Addmovie';



function App() {
  const [movies, setMovies] = useState([])
  const imgpath= "https://image.tmdb.org/t/p/w500"

  useEffect(()=>{
    const getMovies = async()=>{
      const res = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b001c57ee146a9efef888fb472fa0d23&page=1");
      const data = await res.json()
      return setMovies(data.results)
    }
    getMovies()
  }, [])
  
  

  const findMovie = async (title)=>{
    const res = await fetch (`https://api.themoviedb.org/3/search/movie?&api_key=b001c57ee146a9efef888fb472fa0d23&query=${title}`)
    const data = await res.json();
    return setMovies(data.results)  
  }

  return (
    <div className="App">
      <Header />
      <Addmovie findMovie={findMovie}/>
      {movies.length > 0 ? <Movies movies={movies} imgpath={imgpath}/> : 'No Movies to Show'}
      
    </div>
  );
}

export default App;