import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

const StyledButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #43aa8b;
  color: white;
  border: 1px solid #f3f3f3;
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: ${props => props.isVisible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    border-color: #fff;
  }
`;

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <StyledButton
      onClick={scrollToTop}
      isVisible={isVisible}
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </StyledButton>
  );
};

export default BackToTopButton;
