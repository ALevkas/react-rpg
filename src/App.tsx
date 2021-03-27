import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './Components/Layout/Footer';
import { Header } from './Components/Layout/Header';
import { Main } from './Components/Layout/Main';

import { HeroProvider } from './HeroContext';

function App() {
    return (
        <>
            <Router basename='react-app-hero'>
                <HeroProvider>
                    <Header />
                    <Main />
                    <Footer />
                </HeroProvider>
            </Router>
        </>
    );
}

export default App;
