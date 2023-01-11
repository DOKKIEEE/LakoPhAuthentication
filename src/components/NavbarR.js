import React, { Component } from 'react';
import { Navbar, Nav, } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../css/Header.css';

import Features from './Features';
import Login from './login_component';
import SignUp from './signup_component';
import LogoutBtn from './LogoutBtn'

export default class NavbarR extends Component {
    constructor(){
        super();
        this.state={
            show: true,
        }
    }
  render() {
    const isLoggedIn = window.localStorage.getItem("loggedIn");
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg bg-primary mb-5">
                    <div className="container-fluid">
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <button className="navbar-toggler border border-info text-info"
                         onClick={ ()=>{ this.setState({show: !this.state.show}) } } type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                        <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active' } id="navbarNav">
                        <ul className="navbar-nav ms-3">
                            <li className="nav-item">
                            <Nav.Link href="#home">Home</Nav.Link>
                            </li>
                            <li className="nav-item">
                            <Nav.Link as={Link} to={"/features"}>Features</Nav.Link>
                            </li>
                            <li className="nav-item me-5">
                            {isLoggedIn === "true" ? <LogoutBtn /> : <Nav.Link as={Link} to={"/sign-in"}>Login</Nav.Link> }
                            </li>
                        </ul>
                        </div>
                </nav>
            </div>
            <div>
                <Switch>
                    <Route path={"/features"}>
                    <Features />
                    </Route>
                    <Route path={"/sign-in"}>
                    <Login />
                    </Route>
                    <Route path={"/sign-up"}>
                    <SignUp />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
  }
}
