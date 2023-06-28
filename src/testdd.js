import React, { useState } from 'react';
import { Col, Row, Form, } from 'react-bootstrap';
// import axios from 'axios';
import { PaystackButton } from 'react-paystack';

const PaystackPayment = ({totalPrice}) => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(totalPrice);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate]= useState('');
  const [validated, setValidated] = useState(false);

  

  const publicKey = 'pk_test_732f1ca685f0f1d4ab9d64ed20a6e7b046f633d8';

  const onSuccess = reference => {
    // Payment was successful
    console.log('Payment successful. Reference:', reference);
  };

  const onClose = () => {
    // Payment was closed by the user
    console.log('Payment closed');
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };




  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  

  return (
    <div className="paystack-payment" style={{marginTop: '50px'}} >
      <h2>Paystack Payment</h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email:
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="email" id="email" value={email} onChange={handleEmailChange}  placeholder="Email" required />
        </Col>
        <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
      </Form.Group>
      
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Phone number:
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="number" placeholder="Phone Number" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
        Select Date:
        </Form.Label>
        <Col sm={4}>
          <Form.Control 
          type="date" 
          id="date" 
          value={selectedDate}  
          onChange={(e)=>{
            setSelectedDate(e.target.value)
          }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
        Amount:
        </Form.Label>
        <Col sm={4}>
          <Form.Control 
            type="number" 
            id="amount" 
            disabled
            value ={totalPrice}
           onChange={(e)=>{
            setAmount(e.target.value)
           }}
          />
        </Col>
      </Form.Group>
      
      <PaystackButton
        type= "submit"
        text="Checkout"
        className="btn btn-primary m-3"
        callback={onSuccess}
        close={onClose}
        disabled={loading}
        embed={false}
        reference={new Date().getTime().toString()}
        email={email}
        amount={totalPrice * 100}
        publicKey={publicKey}
      />


   </Form>
   {/* <Button type="submit" onClick={initializePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Make Payment'}
      </Button> */}


    </div>
  );
};

export default PaystackPayment;
