import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.scss';
class Header extends Component {
    render() {
        return (
            <div className="header-body">
                <Navbar >
                    <Navbar.Brand to="/#home" className="mr-auto">JITHIN PUTHIYATTU</Navbar.Brand>
                    <Nav className="header-nav-list">
                        <Link className="nav-item Nav-item" to="/home">HOME</Link>
                        <Link className="nav-item Nav-item" to="/about">ABOUT</Link>
                        <Link className="nav-item Nav-item" to="/resume">RESUME</Link>
                        <Link className="nav-item Nav-item" to="/articles">ARTICLES</Link>
                        <Link className="nav-item Nav-item" to="/explore">EXPLORE</Link>
                    </Nav>
                </Navbar>
                <hr></hr>
            </div>
        )
    }
}

export default Header;
