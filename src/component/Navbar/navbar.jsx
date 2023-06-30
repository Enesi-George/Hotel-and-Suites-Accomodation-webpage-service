import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";



function Appbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top" >
      <Container >
        <Navbar.Brand href="/" >FIDTECH HOTEL & SUITES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className='menu'>
          <Link className='Link' to="/">Home</Link>
            <Link className='Link' to="/book" >Book</Link>
            <Link className='Link' to="/img">Our Service</Link>
            <Link className='Link' to="#"> About</Link>
            <Link className='Link' to="#">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;