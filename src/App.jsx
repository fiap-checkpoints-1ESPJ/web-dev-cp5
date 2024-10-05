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
        <FeedbackSection/>
            <ContactSection />
            <Footer />
            <BackToTopButton />
        </MainContent>
    );
}

export default App;

