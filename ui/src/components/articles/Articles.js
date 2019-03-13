import React, { Component } from 'react'
import './../../Common.scss';
import './Articles.scss';
import { Card, Row, Col, Container } from 'react-bootstrap';
class Articles extends Component {
    render() {
        return (
            <div className="App-page">
            <Container>

                <Row>

                    <Col >
                        <Card bg="secondary" text="white" className="article-box">
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Secondary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                    </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col >
                        <Card bg="success" text="white" className="article-box">
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Success Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                    </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
   
                <Row>
                    <Col>
                        <Card bg="primary" text="white" className="article-box">
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Primary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                        </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col >
                        <Card bg="secondary" text="white" className="article-box">
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Secondary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                    </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
    
                </Container>
            </div>
        )
    }
}

export default Articles;