import './App.css';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import Navebar from './components/navebar/Navebar';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimonilas from './components/testimonials/Testimonilas';
import Works from './components/works/Works';


function App() {
  return (
    <div className="App">
      <Navebar/>
      <Intro />
      <Services/>
      <Experience/>
      <Works />
      <Portfolio />
      <Testimonilas />
      <Contact /> 
      <Footer />
      
      
    </div>
  );
}

export default App;
