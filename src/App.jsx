import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobeComponent from './components/Globe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="bg-gradient-animated"></div>
      <Navbar />
      <Hero />
      <GlobeComponent />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
