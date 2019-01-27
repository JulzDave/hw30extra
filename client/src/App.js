import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Newpet from './comp/newpet';
import Findpet from './comp/findpet';

class App extends Component {
  state = { allPets: "" }
  render() {
    return (
      <Router>
        <div className="App">
        <Route path="/newpet" component={Newpet} />
        <Newpet/>
        <Findpet/>
        </div>
      </Router>
    );
  }
}

export default App;
