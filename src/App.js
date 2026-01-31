import './App.css';
import Header from './Header';
import Presentation from './Presentation';
import PortfolioSite from './portfolio.jsx';
import Projects from './Projects.jsx';
import AboutMe from './AboutMe.jsx';

function App() {
  return (
    <>
      <Header /> 
      <Presentation />
      <Projects />
      <AboutMe />
      <PortfolioSite />
    </>
  );
}

export default App;
