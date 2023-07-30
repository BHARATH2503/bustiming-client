import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/Nav.css";
export default function Navbar1 ()
{
    return(
        <>
        <Navbar sticky="top" expand="lg" bg="dark">
            <Container fluid>
            <Navbar.Brand>
                <Link to="/Auth"><img style={{cursor:'default'}}
              src="https://findicons.com/files/icons/914/cemagraphics/256/travel_bus.png"
              width="50"
              height="50"
              className=" align-center"
              alt="React Bootstrap logo"/></Link>
              <a className='logo' href="/" style={{cursor:'default'}}>Find My Bus</a></Navbar.Brand>
                <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="link" to="/">Home</Link>
                        <Link className="link" to="/searchbus">Search Bus</Link>
                        <Link className="link" to="/contact">Feedback</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
  );
}