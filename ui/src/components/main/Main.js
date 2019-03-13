import React, { Component } from 'react';
import Header from './../header/Header';
import Resume from './../resume/Resume';
import Footer from './../footer/Footer';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from '../home/Home';
import About from '../about/About';
import Articles from '../articles/Articles';
import Explore from '../explore/Explore';
export default class Main extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header></Header>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} ></Route>
                        <Route path="/about" component={About} ></Route>
                        <Route path="/resume" component={Resume} ></Route>
                        <Route path="/articles" component={Articles} ></Route>
                        <Route path="/explore" component={Explore} ></Route>
                    </div>
                </BrowserRouter>
                <Footer></Footer>

            </div>

        )
    }
}
