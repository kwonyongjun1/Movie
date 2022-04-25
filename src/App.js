import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(() =>{
        axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=9')
            .then((Response)=>{
              setMovies(Response.data.data.movies);
              setLoading(false);
            }).catch((Error)=>{
                console.log(Error);
        });
    },[]);
    console.log(movies);
  return (
    <div>
        {
            loading ?
                (<h1>Loading...</h1>
                ):(
                    <div> {movies.map(movie =>
                        <div key = {movie.id}>
                            <img src = {movie.medium_cover_image} />
                            <h2>{movie.title}</h2>
                            <p>{movie.summary}</p>
                            <ul>
                            {movie.genres.map((g) => (
                                  <li key={g}>{g}</li>
                             ))}
                            </ul>
                        </div>
                    )}
                    </div>
                )}
    </div>
  );
}

export default App;
