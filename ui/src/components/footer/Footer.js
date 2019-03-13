import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import './Footer.scss';
export default class Footer extends Component {
    render() {
        return (
            <div className="footer-body">
                <hr></hr>
                <div>
                    <Navbar className="footer-navbar">
                        <a href="https://www.facebook.com/jithinputhiyattu" target="_blank" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="https://github.com/jithinputhiyattu" target="_blank" className="fa fa-github"></a>
                        <a href="https://www.linkedin.com/in/jithinputhiyattu/" target="_blank" className="fa fa-linkedin"></a>
                        <a href="#" className="fa fa-instagram"></a>
                    </Navbar>
                </div>
            </div>
        )
    }
}
