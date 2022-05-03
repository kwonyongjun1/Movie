import PropTypes from "prop-types"
import {Link} from "react-router-dom";

function Movie(props/*{id, coverImg,title,summary,genres}*/){
    return (<div >
        <img src = {props.coverImg} alt = {props.title}/>
        <h2>
            <Link to={`/movie/${props.id}`}>{props.title}</Link>
        </h2>
        <p>{props.summary}</p>
        <ul>
            {props.genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
        </ul>
    </div>)
}

Movie.prototype = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;