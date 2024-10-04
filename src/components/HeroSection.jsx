import styled from 'styled-components';
import heroImage from '../assets/food-background.jpg';

const Hero = styled.section`
  height: 100dvh;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #0b090a;
  text-align: center;
`;

const HeroTextWrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 0rem;
`

const Title = styled.h1`
  font-family: "Qwitcher Grypen", cursive;
  font-size: clamp(4rem, 4.5vw, 8rem);
  margin-bottom: 1rem;
  line-height: .5;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #43aa8b;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
      opacity: 90%;
  }
`;

const HeroSection = () => {
    return (
        <Hero id="hero">
            <HeroTextWrapper>
                <Title>Welcome to GourmetOn</Title>
                <Description>Your go-to food delivery service for quick and delicious meals!</Description>
            </HeroTextWrapper>
            <Button>Download the App</Button>
        </Hero>
    );
}

export default HeroSection;
