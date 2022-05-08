import {useEffect, useState} from "react";
import axios from "axios";
import Movie from "../components/Movie";
import '../css/common/common.css';
function Home(){
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
        <div className='basic-div'>
            {
                loading ?
                    (<h1>Loading...</h1>
                    ):(
                            <div className= "grid-group"> {movies.map((movie,index) => (
                                <Movie
                                    index = {index}
                                    id = {movie.id}
                                    coverImg = {movie.medium_cover_image}
                                    title = {movie.title}
                                    summary = {movie.summary}
                                    genres = {movie.genres}
                                />
                            ))}
                            </div>

                    )}
        </div>
    );
}
export default Home;