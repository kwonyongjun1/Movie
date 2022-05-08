import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import {Card, Button, CardGroup} from 'react-bootstrap';
import {useState} from "react";
function Movie(props){

    const [CardGroup, CardGroupState] = useState(true);

    return (


        <Card style={{ width: '18rem' }}>
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
                <Link to={`/movie/${props.id}`}><Button variant="primary">gd </Button></Link>
            </Card.Body>
        </Card>




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