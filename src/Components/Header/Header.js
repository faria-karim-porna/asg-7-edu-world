import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, NavbarBrand, NavLink, Nav } from 'react-bootstrap'
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar className="navbar-bg" expand="lg">
                <Navbar.Brand className="brand pl-2 pr-2" href="#home">Edu-World</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className = "navbar-text" href="#home">Home</Nav.Link>
                        <Nav.Link className = "navbar-text" href="#link">All Courses</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className = "navbar-text" href="#home">Log In</Nav.Link>
                        <Nav.Link className = "navbar-text" href="#link">Sign Up</Nav.Link>
                    </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    );
};

export default Header;