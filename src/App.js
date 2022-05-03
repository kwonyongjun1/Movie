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
function App() {
   return(

     <Router>
         <Menu/>
         <Routes>
            <Route path = '/movie/:id' element={<Detail/>} />
            <Route path = '/' element={<Home/>} />
          </Routes>
      </Router>
   );
}

export default App;
