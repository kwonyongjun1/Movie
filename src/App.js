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
    const [search, setSearch] = useState(  '');
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
   // const [apiUrl, setApiUrl] = useState(' https://yts.mx/api/v2/list_movies.json?');
    //배열로 저장하기
    //query_term : 영화제목 geners : 장르 minimum_rating : 평점
    // query_term=marvel

    // enum?
    // 상태 패턴 추가
    // getUrl function



    useEffect(() =>{
        searchApi('main');
    },[]);

    // url 받아서 값 가져오기
    const getUrl = (mainUrl) =>{
        let apiUrl = '';
        if(mainUrl == 'main'){
            apiUrl = 'https://yts.mx/api/v2/list_movies.json?';
        } else if (mainUrl == 'detail'){
            apiUrl = 'https://yts.mx/api/v2/movie_details.json?';
        }

        if(search != null){
            apiUrl += 'query_term='+search;
        }

        return apiUrl;

    };



    const searchApi = (state) => {
        let url = 'https://yts.mx/api/v2/list_movies.json?';
           // getUrl(state);

        axios.get(url)
            .then((Response)=>{
                console.log(Response);
                setMovies(Response.data.data.movies);
                setLoading(false);
            }).catch((Error)=>{
            console.log(Error);
        });
    };






   return(

     <Router>
         <Menu setSearch = {setSearch} search = {search} loading = {loading} movies={movies} searchApi = {searchApi}/>
         <Routes>
            <Route path = '/movie/:id' element={<Detail/>} />
            <Route path = '/' element={<Home search = {search} loading = {loading} movies={movies} />} />
          </Routes>
      </Router>
   );
}

export default App;
