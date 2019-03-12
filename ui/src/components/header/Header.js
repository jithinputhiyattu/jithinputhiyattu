import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <div>

                <Navbar bg="white">
                    <Navbar.Brand to="/#home" className="mr-auto">JITHIN PUTHIYATTU</Navbar.Brand>
                    <Nav>
                        <Link className="Nav-item" to="/home">HOME</Link>
                        <Link className="Nav-item" to="/about">ABOUT</Link>
                        <Link className="Nav-item" to="/resume">RESUME</Link>
                        <Link className="Nav-item" to="/articles">ARTICLES</Link>
                        <Link className="Nav-item" to="/explore">EXPLORE</Link>
                    </Nav>
                </Navbar>
                <hr></hr>
            </div>
        )
    }
}

export default Header;
