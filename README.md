# Checkpoint 5 - Web Development

## Integrantes 👋
<ul>
    <li>Gabriel Barros (RM556309)</li>  
    <li>João Marcelo Furtado Romero (RM555199)</li>
    <li>Kayky Silva Stiliano (RM555148)</li>
    <li>Pedro Henrique Bizzo de Santana (RM557263)</li>
    <li>Pedro Henrique Mendes Dos Santos (RM555332)</li>
</ul>

## Dependências 📦
<ul>
    <li>styled-components</li>
    <li>react-scroll</li>
</ul>

## Descrição
O GourmetOn é um projeto de uma plataforma de delivery de comidas que oferece uma experiência intuitiva e eficiente para os usuários. Com funcionalidades como pesquisa rápida de restaurantes, filtragem por culinária, checkout facilitado e rastreamento em tempo real, a plataforma busca simplificar o processo de pedir refeições, proporcionando uma jornada do usuário agradável e imersiva.

<br>

## Funcionalidades
<ul>
  <li>Pesquisa Rápida: Encontre facilmente seus pratos e restaurantes favoritos.</li>
  <li>Filtro por Culinária: Filtre opções de acordo com o tipo de culinária, preço ou classificação.</li>
  <li>Checkout Simples: Experiência de pagamento facilitada com várias opções de pagamento.</li>
  <li>Rastreamento em Tempo Real: Veja onde seu pedido está no mapa, em tempo real.</li>
  <li>Favoritos: Salve seus pratos e restaurantes preferidos para acessos futuros rápidos.</li>
</ul>

<br>

## Explicando o <a href="https://github.com/fiap-checkpoints-1ESPJ/web-dev-cp5/blob/main/index.html">Código</a> 🧑‍💻
`index.html`: Arquivo principal HTML que carrega o root e o JavaScript.

```c
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/japanese-food.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@400;700&display=swap" rel="stylesheet">

    <title>GourmetOn</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```
<br>

## Explicando o <a href="https://github.com/fiap-checkpoints-1ESPJ/web-dev-cp5/blob/main/src/main.jsx">Código</a> 🧑‍💻
`main.jsx`: Ponto de entrada principal da aplicação React, que utiliza o componente App para renderizar a interface.
```c
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
<br>

## Explicando o <a href="https://github.com/fiap-checkpoints-1ESPJ/web-dev-cp5/blob/main/src/App.jsx">Código</a> 🧑‍💻
`App.jsx`: Componente principal que organiza todas as seções e componentes da aplicação. 
```c
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import FunctionalitiesSection from './components/FunctionalitiesSection';
import FoodOptionsSection from './components/FoodOptionsSection'
import FeedbackSection from './components/FeedbackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTopButton from './components/GoBackToTop'
import styled from 'styled-components';

const MainContent = styled.main`
    width: 100vw;
    min-width: 320px;
    overflow-x:hidden;
`

const App = () => {
    return (
        <MainContent>
            <Header />
            <HeroSection />
            <BenefitsSection />
            <FunctionalitiesSection />
            <FoodOptionsSection />
            <FeedbackSection />
            <ContactSection />
            <Footer />
            <BackToTopButton />
        </MainContent>
    );
}

export default App;

```
<br>

## Explicando o <a href="https://github.com/fiap-checkpoints-1ESPJ/web-dev-cp5/blob/main/src/components/Header.jsx">Código</a> 🧑‍💻
`Header.jsx`: Componente de cabeçalho, com menu de navegação responsivo e ícones de usuário e pesquisa.
```c
import { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiUser } from 'react-icons/fi';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  height: 64px;
  padding-inline: 2rem;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
    
  background-color: #43aa8b;
  z-index: 9999;

  @media (min-width: 768px) {
    padding: 0 24px;
  }
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  font-weight: medium;
  color: #f3f3f3;

  &:hover {
    color: #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
  }
`;

const HamburgerButton = styled.button`
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: #f3f3f3;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  background-color: #f5f5f5;
  padding: 16px;
  z-index: 999;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  display: block;
  padding: 10px 0;
  text-decoration: none;
  font-weight: medium;
  color: #888;

  &:hover {
    color: #333;
  }
`;

const NavSearchWrapper = styled.section`
    display: flex;
    align-items: center;
    column-gap: 2rem;
`

const UserButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  padding: 8px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid  #eee;
  }
`;

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <HeaderWrapper>
            <HamburgerButton onClick={toggleMenu}>
                <FiMenu size={20} />
            </HamburgerButton>

            <Nav>
                <NavLink href="#hero">Welcome</NavLink>
                <NavLink href="#benefits">Benefits</NavLink>
                <NavLink href="#functionalities">Funcionalities</NavLink>
                <NavLink href="#reviews">Reviews</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </Nav>

            <MobileNav isOpen={menuOpen}>
                <MobileNavLink href="#hero">Welcome</MobileNavLink>
                <MobileNavLink href="#benefits">Benefits</MobileNavLink>
                <MobileNavLink href="#functionalities">Funcionalities</MobileNavLink>
                <MobileNavLink href="#reviews">Reviews</MobileNavLink>
                <MobileNavLink href="#contact">Contact</MobileNavLink>
            </MobileNav>

            <NavSearchWrapper>
                <UserButton>
                    <FiUser size={20} color='#f3f3f3'  />
                </UserButton>
            </NavSearchWrapper>
        </HeaderWrapper>
    );
};

export default Header;
```
<br>

## Explicando o <a href="https://github.com/fiap-checkpoints-1ESPJ/web-dev-cp5/blob/main/src/components/HeroSection.jsx">Código</a> 🧑‍💻
`HeroSection.jsx`: Seção de boas-vindas com imagem de fundo e um botão de ação para baixar o app.
```c
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
```
<br>

## Explicando o <a href="https://github.com/fiap-checkpoints-1ESPJ/web-dev-cp5/blob/main/src/components/FunctionalitiesSection.jsx">Código</a> 🧑‍💻
`FunctionalitiesSection.jsx`: Apresenta as funcionalidades do app com ícones representativos.
```c
import React from 'react';
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
  color: #ff6347; 
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
    <FunctionalitiesWrapper id="features">
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
```
<br>

## Explicando o <a href="https://github.com/fiap-checkpoints-1ESPJ/web-dev-cp5/blob/main/src/components/FoodOptionsSection.jsx">Código</a> 🧑‍💻
`FoodOptionsSection.jsx`: Mostra uma seleção aleatória de pratos que os usuários podem pedir.
```c
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #f8f8f8;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const MealsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const MealCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MealImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const MealInfo = styled.div`
  padding: 1rem;
`;

const MealName = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const MealCategory = styled.p`
  font-size: 1rem;
  color: #666;
`;

const FoodDeliverySection = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const mealPromises = Array(3).fill().map(() =>
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
          .then(response => response.json())
          .then(data => data.meals[0])
      );

      const fetchedMeals = await Promise.all(mealPromises);
      setMeals(fetchedMeals);
    };

    fetchMeals();
  }, []);

  return (
    <Section>
      <Title>Types of food you can have tonight!!!</Title>
      <MealsContainer>
        {meals.map((meal) => (
          <MealCard key={meal.idMeal}>
            <MealImage src={meal.strMealThumb} alt={meal.strMeal} />
            <MealInfo>
              <MealName>{meal.strMeal}</MealName>
              <MealCategory>{meal.strCategory}</MealCategory>
            </MealInfo>
          </MealCard>
        ))}
      </MealsContainer>
    </Section>
  );
};

export default FoodDeliverySection;
```
<br>

## Explicando o <a href="https://github.com/fiap-checkpoints-1ESPJ/web-dev-cp5/blob/main/src/components/FeedbackSection.jsx">Código</a> 🧑‍💻
`FeedbackSection.jsx`: Exibe avaliações de clientes sobre o serviço.
```c
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const FeedbackWrapper = styled.section`
  padding: 4rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ReviewCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
`;

const ReviewerName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ReviewText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Stars = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Star = styled(FaStar)`
  color: ${({ active }) => (active ? '#ffc107' : '#e4e5e9')};
  margin-right: 5px;
`;

const ReviewCardComponent = ({ name, text, rating }) => {
    const renderStars = () => {
        const totalStars = 5;
        return Array.from({ length: totalStars }, (_, index) => (
            <Star key={index} active={index < rating} />
        ));
    };

    return (
        <ReviewCard>
            <ReviewerName>{name}</ReviewerName>
            <ReviewText>{text}</ReviewText>
            <Stars>{renderStars()}</Stars>
        </ReviewCard>
    );
};

const FeedbackSection = () => {
    const reviews = [
        {
            name: 'John Doe',
            text: 'Amazing service! The food arrived hot and super fast.',
            rating: 5,
        },
        {
            name: 'Jane Smith',
            text: 'Great variety of restaurants. Easy to use app!',
            rating: 4,
        },
        {
            name: 'Mark Johnson',
            text: 'Had some issues with payment, but overall good.',
            rating: 3,
        },
    ];

    return (
        <FeedbackWrapper>
            <div>
                <Title>User Feedback</Title>
                <ReviewContainer>
                    {reviews.map((review, index) => (
                        <ReviewCardComponent
                            key={index}
                            name={review.name}
                            text={review.text}
                            rating={review.rating}
                        />
                    ))}
                </ReviewContainer>
            </div>
        </FeedbackWrapper>
    );
};

export default FeedbackSection;

```
<br>

## Explicando o <a href="https://github.com/fiap-checkpoints-1ESPJ/web-dev-cp5/blob/main/src/components/ContactSection.jsx">Código</a> 🧑‍💻
`ContactSection.jsx`: Permite que os usuários inscrevam seu email para receber novidades.
```c
import { useState } from 'react';
import styled from 'styled-components';

const Contact = styled.section`
  padding: 4rem;
  background-color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #43aa8b;
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
  background-color: #43aa8b;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
      opacity: 85%;
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
```
<br>

## Explicando o <a href="https://github.com/fiap-checkpoints-1ESPJ/web-dev-cp5/blob/main/src/components/BenefitsSection.jsx">Código</a> 🧑‍💻
`BenefitsSection.jsx`: Destaca os benefícios do uso do GourmetOn.
```c
import styled from 'styled-components';
import { FaTruck, FaUtensils, FaCreditCard } from 'react-icons/fa';

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
  color: #ff6347; 
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

const BenefitCardComponent = ({ icon, title, description }) => {
  return (
    <BenefitCard>
      <IconWrapper>{icon}</IconWrapper>
      <BenefitTitle>{title}</BenefitTitle>
      <BenefitDescription>{description}</BenefitDescription>
    </BenefitCard>
  );
};

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
```
<br>

## Explicando o <a href="https://github.com/fiap-checkpoints-1ESPJ/web-dev-cp5/blob/main/src/components/Footer.jsx">Código</a> 🧑‍💻
`Footer.jsx`: Componente de rodapé, com links para redes sociais. 
```c
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #43aa8b;
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
```
<br>

## Explicando o <a href="https://github.com/fiap-checkpoints-1ESPJ/web-dev-cp5/blob/main/src/components/GoBackToTop.jsx">Código</a> 🧑‍💻
`GoBackToTop.jsx`: Componente de CTA (Call To Action), que redireciona o usuário suavemente com a lib react-scroll para o topo da página
```c
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
```

