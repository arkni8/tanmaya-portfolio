import './App.css';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import KeySkills from './components/KeySkills';
import LibraryToolset from './components/LibraryToolset';
import AboutMe from './components/AboutMe';

// Font imports
import '@fontsource/montagu-slab';
import '@fontsource/open-sans';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/800.css';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Copyright from './components/Copyright';
// import '@fontsource/open-sans/900.css';



function App() {
  return (
    <div className="">
      <Landing />
      <KeySkills />
      <LibraryToolset />
      <AboutMe />
      <Projects />
      <ContactForm />
      <Copyright />
      <Navigation />
    </div>
  );
}

export default App;
