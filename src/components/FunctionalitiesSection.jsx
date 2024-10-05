import styled from 'styled-components';
import { FaSearch, FaFilter, FaShoppingCart, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const FunctionalitiesWrapper = styled.section`
  padding: 4rem;
  background-color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background-color: #f9f9f9;
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

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const FeatureCardComponent = ({ icon, title, description }) => {
  return (
    <FeatureCard>
      <IconWrapper>{icon}</IconWrapper>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
    </FeatureCard>
  );
};

const FunctionalitiesSection = () => {
  const features = [
    {
      icon: <FaSearch />,
      title: 'Quick Search',
      description: 'Easily search for your favorite meals and restaurants.',
    },
    {
      icon: <FaFilter />,
      title: 'Filter by Cuisine',
      description: 'Refine your search by cuisine, price, or rating.',
    },
    {
      icon: <FaShoppingCart />,
      title: 'Easy Checkout',
      description: 'Seamless checkout experience with multiple payment options.',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Real-time Tracking',
      description: 'Track your order in real-time with our map feature.',
    },
    {
      icon: <FaHeart />,
      title: 'Favorites',
      description: 'Save your favorite meals and restaurants for quick access.',
    },
  ];

  return (
    <FunctionalitiesWrapper id="functionalities">
      <Title>App Features</Title>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <FeatureCardComponent
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </FeaturesContainer>
    </FunctionalitiesWrapper>
  );
};

export default FunctionalitiesSection;

