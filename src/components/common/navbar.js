import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Image, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import "./navbar.scss";
import { FaSearch } from "react-icons/fa";
const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Arama sorgusu:", searchQuery);
  };

  return (
    <Navbar className='navbar-header' expand="lg">
      <Container className='navbar-container' fluid>
        <Navbar.Brand className='logo-image' href="/">
          <Image className='logo' src="../../logo2.jpg" />
        </Navbar.Brand>
        <Navbar.Toggle className='navbar-toggle' aria-controls="navbar-dark-example" />
        <Navbar.Collapse className='navbar-collapse' id="navbar-dark-example">
          <Nav.Link className='nav-link' href="/">Home</Nav.Link>
          <Nav className='navbar-nav'>
            <NavDropdown title="Courses" className='nav-dropdown' id="nav-dropdown-dark-example">
              <Row className='dropdown-row'>
                <Col className='dropdown-col'>
                  <NavDropdown.Item className='dropdown-item-title' href="#action/3.1">SPORT ACTIVITIES</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item' href="#action/3.1">Gymnastics</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item' href="#action/3.1">Ballet</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item' href="#action/3.1">Basketball</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Swimming</NavDropdown.Item>
                </Col>
                <Col className='dropdown-col'>
                  <NavDropdown.Item className='dropdown-item-title' href="#action/3.2">MUSIC ACTIVITIES</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item' href="#action/3.2">Harmonica</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item' href="#action/3.2">Rhythm Cymbals</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item' href="#action/3.2">Xylophone</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Percussion Drum</NavDropdown.Item>
                </Col>
                <Col className='dropdown-col'>
                  <NavDropdown.Item className='dropdown-item-title' href="#action/3.3">INTELLIGENCE GAMES</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item' href="#action/3.3">Quick Math</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item' href="#action/3.3">Puzzle</NavDropdown.Item>
                  <NavDropdown.Item className='dropdown-item' href="#action/3.3">Block Buddies</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Tell Me</NavDropdown.Item>
                </Col>
              </Row>
            </NavDropdown>
          </Nav>
          <Nav.Link className='nav-link' href="/blog">Blog</Nav.Link>
          <Nav.Link className='nav-link' href="/contact">Contact</Nav.Link>
          
          <Form className="d-flex ml-auto min-w-100" onSubmit={handleSearchSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Button type="submit" variant='dark' ><FaSearch /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
