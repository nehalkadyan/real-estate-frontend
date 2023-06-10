import './App.css';
import Contact from './components/Contacts/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Companies from './components/companies/Companies';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <div>
        <div className='white-gradient'/>
        <Header/>
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted/>
      <Footer />
      
    </div>
  );
}

export default App;
