import React from 'react';
import HeadCarousel from '../Header/headslides';
import './home.css';
import AboutUs from '../About/about';
import { Container, Stack } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>  
    <Stack gap={3}>
      <div><HeadCarousel/></div>
    </Stack>
    
    <Container>
      <AboutUs/>
   
      <Link to="/book" className='link'>Book Now!</Link>

    </Container>
  
    

    </div>  
  )
}

export default Homepage;
