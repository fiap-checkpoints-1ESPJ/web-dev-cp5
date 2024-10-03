// components/ContactSection.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = styled.section`
  padding: 4rem;
  background-color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ff0000;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 1rem;
  width: 50%;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #ff0000;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #cc0000;
  }
`;

const ContactSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    alert('Thank you for subscribing!');
  };

  return (
    <Contact id="contact">
      <Title>Stay in the loop!</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Subscribe</Button>
      </Form>
    </Contact>
  );
}

export default ContactSection;
