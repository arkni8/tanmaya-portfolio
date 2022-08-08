import './App.css';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import KeySkills from './components/KeySkills';
import LibraryToolset from './components/LibraryToolset';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Copyright from './components/Copyright';

// Font imports
import '@fontsource/montagu-slab/500.css';
import '@fontsource/montagu-slab/400.css';
import '@fontsource/montagu-slab/300.css';
import '@fontsource/montagu-slab/200.css';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';




function App() {
  return (
    <div>
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
