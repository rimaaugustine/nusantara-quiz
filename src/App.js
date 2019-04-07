import React, { Component } from 'react';
import  './styles/App.css';
import  Navbar from "./components/Navbar.jsx"
import OpeningPage from "./components/OpeningPage.jsx"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <OpeningPage/>
      </div>
    );
  }
}

export default App;
