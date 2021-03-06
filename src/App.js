import React, { Component } from 'react';
//redux-lib
import store from "./store";
import { Provider } from "react-redux";
//router
import { BrowserRouter as Router, Route } from "react-router-dom";
//style
import  './styles/App.css';
//components
import  Navbar from "./components/others/Navbar.jsx"
import OpeningPage from "./components/OpeningPage.jsx"
import About from "./components/About.js"
import Quiz from "./components/Quiz"



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
        <Navbar/>
        <Route path="/" exact component={OpeningPage} />
        <Route path="/about/" component={About} />
        <Route path="/quiz/" component={Quiz} />
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
