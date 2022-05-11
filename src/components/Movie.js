import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import {Card, Button, CardGroup} from 'react-bootstrap';
import {useState} from "react";
import '../css/common/common.css';
function Movie(props){

    const [mouse, setmouse] = useState(false);


    return (

        <div>
                    <Card style={{ width: '18rem' }}
                      className={`mouse ${mouse ? 'in' : 'out'}`}
                      onMouseEnter={ ()=> {setmouse(true)}}
                      onMouseLeave={ ()=> {setmouse(false)}}>

                    <Card.Img variant="top" src = {props.coverImg} alt = {props.title} />
                    <Card.Body>
                        <Card.Title>
                            {props.title}
                            {props.index}
                        </Card.Title>
                        <Card.Text>
                            {props.summary}
                            {props.genres.map((g) => (
                                <li key={g}>{g}</li>
                            ))}
                        </Card.Text>

                    </Card.Body>
                </Card>
        </div>

    )
}

Movie.prototype = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    key : PropTypes.number.isRequired
}
export default Movie;