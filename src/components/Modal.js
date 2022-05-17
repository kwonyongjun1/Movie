import {Card, Button, CardGroup} from 'react-bootstrap';
import {useEffect, useState} from "react";
import axios from "axios";

function Modal(props){
    const [movieDetail, setmovieDetail] = useState('');

  /*  useEffect(() =>{
        axios.get('https://yts.mx/api/v2/movie_details.json?movie_id='+props.movieId)
            .then((Response)=>{
                setmovieDetail(Response.data.data.movies);
                console.log(movieDetail);
            }).catch((Error)=>{
            console.log(Error);
        });
    },[]);*/

    const closeModal = () =>{
        props.setShowModal(false);
    }


    return(
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


    );
}

export default Modal;