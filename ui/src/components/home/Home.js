import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './../../Common.scss';
import Slide from '../slide/Slide';
import './Home.scss';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.data = [{
            title: "Slie A",
            subtitle: "Sub title",
            description: "props.description"
        },{
            title: "Slie B",
            subtitle: "Sub title",
            description: "props.description"
        }, {
            title: "Slie C",
            subtitle: "Sub title",
            description: "props.description"
        }]
    }
    render() {

        let carouselItems = this.data.map((item, index) => {
            return (
                <Carousel.Item key={index}>
                    <Slide />
                    <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        });

        return (
            <div className="home-body App-page ">
                <Carousel>
                    {carouselItems}
                </Carousel>
            </div>
        )
    }
}
