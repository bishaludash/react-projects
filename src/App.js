import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";

const App = () => {
  return (
    <Router>
      <nav>
        <NavLink to='/home'  activeClassName="activeLink" className="nav-links" >Home</NavLink>
        <NavLink to='/login' activeClassName="activeLink" className="nav-links"   >Login</NavLink>
      </nav>
      
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Redirect to='/home'></Redirect>
      </Switch>
    </Router>
  );
};

export default App;
