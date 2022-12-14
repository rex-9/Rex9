import Rex9 from './components/Rex9/Rex9';
import Catchphrase from './components/Catchphrase/Catchphrase';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';
import Nav from './components/Nav/Nav';
import Skills from './components/Skills/Skills';

import './App.scss';

const App = () => (
  <>
    <Nav />
    <Rex9 />
    <Catchphrase />
    <Skills />
    <Projects />
    <Testimonials />
    <Contact />
  </>
);

export default App;
