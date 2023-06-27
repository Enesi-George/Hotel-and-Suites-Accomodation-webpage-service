import React, { useState } from 'react';
import Cart from '../Cart/cart';
import {Table, Button, Container } from 'react-bootstrap';



const HotelBooking = () => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = item => {
      const existingItem = cartItems.find(i => i.id === item.id);
      if (existingItem) {
        setCartItems(prevItems =>
          prevItems.map(i =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        );
      } else {
        setCartItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
      }
    };
  
    const removeFromCart = item => {
      if (item.quantity === 1) {
        setCartItems(prevItems => prevItems.filter(i => i.id !== item.id));
      } else {
        setCartItems(prevItems =>
          prevItems.map(i =>
            i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
          )
        );
      }
    };
  
    const hotelItems = [
      { id: 1, name: 'Standard', price: 100 },
      { id: 2, name: 'Deluxe', price: 150 },
      { id: 3, name: 'Suite', price: 200 }
    ];
  
    return (
      <Container className="App" style={{marginTop:"100px", padding:"20px", border:"1px solid grey", borderRadius: '10px'}}>
        <div>
        <h1> Hotel Booking</h1>
           
        {/* <HotelBookingForm /> */}

        </div>
  

        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Available</th>
                <th>Price</th>
                <th>Add to cart</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                <div className="hotel-item" style={{display: "flex", flexDirection: "column"}}>
                    {hotelItems.map(item => (
                    <div className="hotel-item" key={item.id}>
                    <td>{item.name}</td>
                  
                    </div>
                     ))}
                 </div>

                </td>
                <td>
                    {hotelItems.map(item =>(
                        <div className="hotel-item" key={item.id}>
                            <td>{item.price}</td>
                        </div>
                    ))}
                </td>
                <td>
                {hotelItems.map(item =>(
                        <div className="hotel-item" key={item.id}>
                            <td><Button href='#' onClick={() => addToCart(item)} style={{ fontSize: "12px", padding: "0px 5px"}}>Add to Cart</Button></td>
                        </div>
                    ))}
                </td>
                </tr>
                
            </tbody>
            </Table>

            <div>
                               
            <Cart
                    cartItems={cartItems}
                    onAddToCart={addToCart}
                    onRemoveFromCart={removeFromCart}

            />
            </div>

 


  

      </Container>
    );
  };
  export default HotelBooking