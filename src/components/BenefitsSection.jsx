import styled from 'styled-components';
import { FaTruck, FaUtensils, FaCreditCard } from 'react-icons/fa';

// Styled Components
const BenefitsWrapper = styled.section`
  padding: 4rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const BenefitCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #ff6347; /* Tomato color similar to iFood */
  margin-bottom: 1rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const BenefitDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

// Benefit Card Component
const BenefitCardComponent = ({ icon, title, description }) => {
  return (
    <BenefitCard>
      <IconWrapper>{icon}</IconWrapper>
      <BenefitTitle>{title}</BenefitTitle>
      <BenefitDescription>{description}</BenefitDescription>
    </BenefitCard>
  );
};

// Benefits Section Component
const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaTruck />,
      title: 'Quick Delivery',
      description: 'Get your food delivered fast and hot, right at your doorstep.',
    },
    {
      icon: <FaUtensils />,
      title: 'Variety of Restaurants',
      description: 'Choose from a wide range of restaurants and cuisines.',
    },
    {
      icon: <FaCreditCard />,
      title: 'Easy Payment Methods',
      description: 'Pay easily with multiple payment options.',
    },
  ];

  return (
    <BenefitsWrapper id="benefits">
      <Title>Why Choose GourmetOn?</Title>
      <BenefitsContainer>
        {benefits.map((benefit, index) => (
          <BenefitCardComponent
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </BenefitsContainer>
    </BenefitsWrapper>
  );
};

export default BenefitsSection;
