import "./App.scss";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolios from "./pages/Portfolios";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Particle from "react-particles-js";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = ()=>{
    setNavToggle(!navToggle);
  }
  return (



    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-contect">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/About" exact>
              <About />
            </Route>
            <Route path="/Portfolios" exact>
              <Portfolios />
            </Route>
            <Route path="/Blog" exact>
              <Blog />
            </Route>
            <Route path="/Contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
