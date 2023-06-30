import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Appbar from './component/Navbar/navbar';
import HotelBooking from './component/Booking/bookin';
import Homepage from './component/Homepage/home';
import ImageCardGrid from './testdd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Container fluid style={{padding: '0px'}}>
      <Router>
      <Appbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/book" element= {<HotelBooking/>} />
          <Route path="/img" element= {<ImageCardGrid/>} />
        </Routes>
  </Router>
  </Container>

  );
};

export default App;






