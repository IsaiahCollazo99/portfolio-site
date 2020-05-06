import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route exact path={"/projects"}>
          <Projects />
        </Route>

        <Route exact path={"/contact"}>
          <Contact />>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
