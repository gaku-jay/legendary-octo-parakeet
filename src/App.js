import React from 'react';
import classes from './App.css';

import Header from './components/UI/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      profileData: {}
    }
  }

  getProfileData = () => {
    fetch('/profileData.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(response => response.json())
    .then(data => (
      this.setState({profileData: data})
    ));
  }

  componentDidMount(){
    this.getProfileData();
  }


  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <Home data={this.state.profileData.main}/>
        <About data={this.state.profileData.main}/>
        <Resume data={this.state.profileData.resume}/>
        <Work data={this.state.profileData.portfolio}/>
        <Contact data={this.state.profileData.main}/>
      </div>
    );
  }
};

 

export default App;
