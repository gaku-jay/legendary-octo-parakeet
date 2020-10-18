import React from 'react';
import Header from './components/UI/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';

import Contact from './components/Contact/Contact';
import WorkController from './containers/WorkController/WorkController';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Home />
      <About />
      <Resume />
      <WorkController />
      <Contact />
    </div>
  );
}

export default App;
