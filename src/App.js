import React from 'react';
import Header from './components/UI/Header/Header';
import IntroductionPart from './components/IntroductionPart/IntroductionPart';
import About from './components/About/About';
import Resume from './components/Resume/Resume';

import ContactController from './containers/ContactController/ContactController';
import WorkController from './containers/WorkController/WorkController';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <IntroductionPart />
      <About />
      <Resume />
      <WorkController />
      <ContactController />
    </div>
  );
}

export default App;
