import {Card, Button, CardGroup} from 'react-bootstrap';
import {useEffect, useState} from "react";
import axios from "axios";

function Modal(props){
    const [movieDetail, setmovieDetail] = useState('');
    const [useLoading, setLoading] = useState(true);
     useEffect(() =>{
        axios.get('https://yts.mx/api/v2/movie_details.json?movie_id='+props.movieId)
            .then((Response)=>{
                setmovieDetail(Response.data.data.movie);
                setLoading(false);
                console.log(movieDetail);
            }).catch((Error)=>{
            console.log(Error);
        });
    },[]);

    const closeModal = () =>{
        props.setShowModal(false);
    }


    return(
        <div className='modal_background'>
            {
                useLoading  ?
                    (
                       <div> Loading.. </div>
                    )   :
                    (
                        <div className='modal__container'>
                            <Card
                                bg={'light'}
                                key={'Light'}
                                text={'black'}
                                style={{ width: '24rem' }}
                                className="mb-2"
                            >
                                <Card.Header> <label className='modal_header_btn' onClick={closeModal}>✖</label></Card.Header>
                                <Card.Body className = 'modal_body'>

                                    <Card.Img variant="top" src={movieDetail.large_cover_image} />

                                    <Card.Title> {movieDetail.title}
                                    </Card.Title>
                                    <Card.Text>

                                        러닝타임 :
                                        {
                                            movieDetail.runtime
                                        }

                                        좋아요 :
                                        {
                                            movieDetail.like_count
                                        }

                                        내용 :
                                        {
                                            props.movieSummary
                                        }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
            }


        </div>


    );
}

export default Modal;