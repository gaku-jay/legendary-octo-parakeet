import React from 'react';
import Header from './components/UI/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Home />
      <About />
      <Resume />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
