import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Detail(){
    const [loading,setLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const { id }= useParams();
    const getMovie = async () =>{
       await (
          await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
              .then((Response)=>{
                  console.log(Response.data.data.movie);
                  setLoading(false);
                  setMovie(Response.data.data.movie);
              }).catch((Error)=>{
                  console.log(Error);
              })
      );
    };
    useEffect(()=>{
        getMovie();
    },[]);

    return (
        <div>
            {
                loading ?
                    (
                        <h1>Loading....</h1>
                    ):(
                        <div>
                            <h1>DetailPage</h1>
                            <h1>{movie.id}</h1>
                            <h1>{movie.title}</h1>
                            <h1>{movie.date_uploaded}</h1>
                            <h1></h1>
                        </div>
                    )
            }

        </div>
        );
}

export default Detail;