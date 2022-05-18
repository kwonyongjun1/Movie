import {useEffect, useState} from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Modal from "../components/Modal";
import '../css/common/common.css';
import {Card, Button, CardGroup} from 'react-bootstrap';

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [movieId, setMovieId] = useState(0);
    const openModal = id =>{
        setMovieId(id);
        setShowModal(true);

    }
    const closeModal = () =>{
        setShowModal(false);
    }

    //모달창 상세내용 나오게하기
    //모달창 컴포넌트화
    useEffect(() =>{
        axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=9')
            .then((Response)=>{
                setMovies(Response.data.data.movies);
                setLoading(false);
            }).catch((Error)=>{
            console.log(Error);
        });
    },[]);

    return (
        <div className='basic-div'>
            {
                loading ?
                    (<h1>Loading...</h1>
                    ):(
                            <div className= "grid-group"> {movies.map((movie,index) => (
                                <div key = {index} onClick={ () => {
                                    openModal(movie.id);
                                }} >
                                    <Movie
                                        index = {index}
                                        id = {movie.id}
                                        coverImg = {movie.medium_cover_image}
                                        title = {movie.title}
                                        summary = {movie.summary}
                                        genres = {movie.genres}
                                    />
                                </div>
                            ))}
                            </div>
                        )
            }

            {
                showModal ?
                    (
                        <Modal showModal = {showModal} setShowModal = {setShowModal} movieId = {movieId}> </Modal>

                    ) : null

            }

        </div>
    );
}
export default Home;