import {useEffect, useState} from "react";
import { Navbar, Container, Nav, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu(props){

    const [input,setInput] = useState('');
    const handleChange = (e) =>{
        setInput(e.target.value);
    };

    const searchEvnet = (s,v) => {
      let search =  v;
      if (s == 'title'){
          props.setSearch(search);
      }

      props.searchApi('main');
    };

    const search = (key , value) => {
        props.setSearch((prev) => new Map([...prev , [key, value]]));
    };

    return(
        <Navbar bg="dark" variant="dark">
            {/*<Container>*/}
                <Navbar.Brand className='margin-left'href="/">🎬</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link >Search</Nav.Link>
                    <Nav.Link >Pricing</Nav.Link>
                </Nav>
            {/*</Container>*/}
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="movie title"
                    onChange={handleChange}
                />
                <Button variant="outline-success" onClick={searchEvnet('title',input)}>Search</Button>
            </Form>
        </Navbar>

       )
}
export default Menu;