// components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #ff0000;
  padding: 2rem;
  color: white;
  text-align: center;
`;

const FooterLink = styled.a`
  color: white;
  margin: 0 1rem;
  text-decoration: none;
  &:hover {
    color: #ffdddd;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Follow us on social media</p>
      <FooterLink href="#">Facebook</FooterLink>
      <FooterLink href="#">Instagram</FooterLink>
      <FooterLink href="#">Twitter</FooterLink>
      <p>&copy; 2024 GourmetOn. All rights reserved. | <FooterLink href="#">Terms & Conditions</FooterLink></p>
    </FooterContainer>
  );
}

export default Footer;
