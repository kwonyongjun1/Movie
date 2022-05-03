import {useEffect, useState} from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Menu(){

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">🎬</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link >Features</Nav.Link>
                    <Nav.Link >Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

       )
}
export default Menu;