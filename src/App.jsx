import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import FunctionalitiesSection from './components/FunctionalitiesSection';
import FoodOptionsSection from './components/FoodOptionsSection'
import FeedbackSection from './components/FeedbackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import styled from 'styled-components';

const MainContent = styled.main`
    width: 100dvw;
    min-width: 320px;
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
        </MainContent>
    );
}

export default App;

