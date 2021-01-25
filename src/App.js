import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Table from "./components/table/Table";
import Navbar from "./components/material/Navbar";


const App = () => {
  return (
    <Router>
      <nav>
        <NavLink to='/home'  activeClassName="activeLink" className="nav-links" >Home</NavLink>
        <NavLink to='/login' activeClassName="activeLink" className="nav-links"   >Login</NavLink>
        <NavLink to='/table' activeClassName="activeLink" className="nav-links"   >table</NavLink>
        <NavLink to='/navbar' activeClassName="activeLink" className="nav-links"   >Navbar</NavLink>
      </nav>
      
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path='/table' exact component={Table} />
        <Route path='/navbar' exact component={Navbar} />
        <Redirect to='/home'></Redirect>

      </Switch>
    </Router>
  );
};

export default App;
