import {useEffect, useState} from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Modal from "../components/Modal";
import '../css/common/common.css';
import {Card, Button, CardGroup} from 'react-bootstrap';

function Home(props){

    const [showModal, setShowModal] = useState(false);
    const [modalMovie, setmodalMovie] = useState('');

    const [url,setUrl] = useState()

    const openModal = (movieId, coverImg , movieSummary) =>{
        setmodalMovie([movieId,coverImg , movieSummary]);
        setShowModal(true);

    }
    const closeModal = () =>{
        setShowModal(false);
    }

    return (
        <div className='basic-div'>
            {
                props.loading ?
                    (<h1>Loading...</h1>
                    ):(
                            <div className= "grid-group"> {
                                props.movies.map((movie,index) => (
                                <div key = {movie.id} onClick={ () => {
                                    openModal(movie.id, movie.large_cover_image , movie.summary);
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
                        <Modal showModal = {showModal} setShowModal = {setShowModal} movieId = {modalMovie[0]} large_cover_image = {modalMovie[1] } movieSummary = {modalMovie[2]}> </Modal>

                    ) : null

            }

        </div>
    );
}
export default Home;