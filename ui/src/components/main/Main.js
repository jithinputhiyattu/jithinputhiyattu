import React, { Component } from 'react';
import Header from './../header/Header';
import Resume from './../resume/Resume';
import { BrowserRouter, Route } from "react-router-dom";
export default class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header></Header>
                    <Route path="/resume" component={Resume} ></Route>
                </div>
            </BrowserRouter>
        )
    }
}
