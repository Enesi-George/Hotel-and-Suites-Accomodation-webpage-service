import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Appbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top" >
      <Container >
        <Navbar.Brand href="/" >FIDTECH HOTEL & SUITES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/book">Book</Nav.Link>
            <Nav.Link href="#">Our Service</Nav.Link>
            <Nav.Link href="#"> About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;