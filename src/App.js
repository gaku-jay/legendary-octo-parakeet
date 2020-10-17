import React from 'react';
import Header from './components/UI/Header/Header';
import IntroductionPart from './components/IntroductionPart/IntroductionPart';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <IntroductionPart />
    </div>
  );
}

export default App;
