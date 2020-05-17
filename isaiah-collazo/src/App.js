import React from 'react';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import homeBackground from './assets/home_background.jpg';
import contactBackground from './assets/contact_background.jpg';

function App() {
  const location = useLocation();

  let appBackground = {
    backgroundImage: null,
    backgroundSize: "cover"
  }

  if(location.pathname === "/") {
    appBackground.backgroundImage = "url(" + homeBackground + ")";
  } else if(location.pathname === "/contact") {
    appBackground.backgroundImage = "url(" + contactBackground + ")";
  }
  
  return (
    <div className="App" style={appBackground}>
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
