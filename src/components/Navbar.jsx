import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const CustomNavbar = () => {
  return (

    <Navbar expand="lg"   className="bg-body-tertiary">
      
        <Navbar.Brand href="#home">SEMANA 11</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto pe-5">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="contact">contacto</Nav.Link>
            <Nav.Link href="blog">blog</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    /*  <nav>
         <ul>
             <li><NavLink to="/">Home</NavLink></li>
             <li><NavLink to="/about">About</NavLink></li>
             <li><NavLink to="/contact">Contact</NavLink></li>
         </ul>
     </nav> */
  )
}

export default CustomNavbar