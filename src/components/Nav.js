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
        <Navbar sticky="top" bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand>
                <Link to="/Auth"><img style={{cursor:'default'}}
              src="https://findicons.com/files/icons/914/cemagraphics/256/travel_bus.png"
              width="50"
              height="50"
              className=" align-center"
              alt="React Bootstrap logo"/></Link>
              <a className='logo' style={{cursor:'default'}}>Find My Bus</a></Navbar.Brand>
                <Navbar.Toggle style={{color:'red'}} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="link" to="/">Home</Link>
                        <Link className="link" to="/searchbus">Search Bus</Link>
                        <Link className="link" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        
        </>
  );
}

//         <div>
//             <nav className="nav navbar bg-dark">
//             <ul className="items">
//             <li>
//             <Link className="link" to="/">Home</Link>
//             </li>
//             <li>
//             <Link className="link" to="/searchbus">Search Bus</Link>
//             </li>
//             <li>
//             <Link className="link" to="/contact">Contact</Link>
//             </li>
            
//             <li>
//             <Link className="link" to="/Auth">Login</Link>
//             </li>
//             </ul>
//             </nav>
//         </div>
//     );
// }
