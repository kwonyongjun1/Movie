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
import {useState} from "react";
function App() {
    const [search, setSearch] = useState('');
    // const [url, setUrl] = useState('https://yts.mx/api/v2/list_movies.json??query_term= ');
    //
    // setUrl(url + )
   return(

     <Router>
         <Menu setSearch = {setSearch}/>
         <Routes>
            <Route path = '/movie/:id' element={<Detail/>} />
            <Route path = '/' element={<Home/>} />
          </Routes>
      </Router>
   );
}

export default App;
