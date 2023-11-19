import './App.scss';
import About from './sections/About';
import Hero from './sections/Hero';
import OtherSkills from './sections/OtherSkills';
import Skills from './sections/Skills';
import Works from './sections/Works';
import Contact from './sections/Contact';

import { useState } from 'react';
import { ScrollRestoration } from "react-router-dom";

import language from './language';



function App() {
  const [lang, setLanguage] = useState(language.getLanguage());
  return (
    <div className='container'>
      <Hero setLanguage={(data) => { setLanguage(data) }}></Hero>
      <About></About>
      <Skills></Skills>
      <Works></Works>
      <Contact></Contact>
    </div>
  );
}

export default App;
