import './App.css';

import { Navbar, Container, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Menu from "./common/Menu";
import {useEffect, useState} from "react";
import axios from "axios";
function App() {
    const [search, setSearch] = useState(  '' );
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [apiUrl, setApiUrl] = useState(' https://yts.mx/api/v2/list_movies.json?query_term=marvel');
    //배열로 저장하기
    //query_term : 영화제목 geners : 장르 minimum_rating : 평점

    // enum?
    // 상태 패턴 추가
    // getUrl function

    // url 받아서 값 가져오기
    const getUrl = (mainUrl, param) =>{
        let apiUrl = '';
        if(mainUrl == 'main'){
            apiUrl = 'https://yts.mx/api/v2/list_movies.json?';
        } else if (mainUrl == 'detail'){
            apiUrl = 'https://yts.mx/api/v2/movie_details.json?';
        }

    }


    const searchApi = () => {
        axios.get(apiUrl)
            .then((Response)=>{
                console.log(Response);
                setMovies(Response.data.data.movies);
                setLoading(false);
            }).catch((Error)=>{
            console.log(Error);
        });
    };



    useEffect(() =>{
        searchApi();
    },[]);


   return(

     <Router>
         <Menu setSearch = {setSearch} search = {search} loading = {loading} movies={movies}/>
         <Routes>
            <Route path = '/movie/:id' element={<Detail/>} />
            <Route path = '/' element={<Home search = {search} loading = {loading} movies={movies} />} />
          </Routes>
      </Router>
   );
}

export default App;
