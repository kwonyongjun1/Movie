import {useEffect, useState} from "react";
import axios from "axios";
import Movie from "../components/Movie";
import '../css/common/common.css';
import {Card, Button, CardGroup} from 'react-bootstrap';

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const openModal = () =>{
        setShowModal(true);
    }
    const closeModal = () =>{
        setShowModal(false);
    }


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
                                <div onClick={openModal}>
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
                        <div className='background'>
                            <div className='modal__container'>
                                    <Card
                                        bg={'light'}
                                        key={'Light'}
                                        text={'black'}
                                        style={{ width: '18rem' }}
                                        className="mb-2"
                                    >
                                        <Card.Header>Header <button onClick={closeModal}>Click</button></Card.Header>
                                        <Card.Body>
                                            <Card.Title> Card Title
                                            </Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                            </div>
                        </div>
                    ) : null

            }

        </div>
    );
}
export default Home;