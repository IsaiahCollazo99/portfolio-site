import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route exact path={"/projects"}>
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
