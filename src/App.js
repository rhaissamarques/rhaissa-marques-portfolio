import './App.css';
import Header from './Header';
import Presentation from './Presentation';
import Footer from './footer.jsx';
import Projects from './Projects.jsx';
import AboutMe from './AboutMe.jsx';

function App() {
  return (
    <>
      <Header /> 
      <Presentation />
      <Projects />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
