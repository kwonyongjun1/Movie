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
        <div className='background'>
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
                                style={{ width: '18rem' }}
                                className="mb-2"
                            >
                                <Card.Header>Header <button onClick={closeModal}>Click</button></Card.Header>
                                <Card.Body>
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

                                        장르 :
                                        {
                                            // movieDetail.genres.map((g,index) => (
                                            //     <li key = {g}> {g}</li>
                                            // ))
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