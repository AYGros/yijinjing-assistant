import React from 'react'
import {Link} from "react-router-dom";
import {Button, Row, Col, Container} from "react-bootstrap";

const Welcome = ({handleRunSet}) => {

    return (
        <Container fluid className="welcomeContainer" >
            <Row className="justify-content-center">
            <p>this page changes background color scheme every 0 seconds if you click start</p>
            </Row>
            <Row className="justify-content-center">
                <Col xm={12} md={6} lg={4}>
                    <p>this page changes background color scheme every 20 seconds if you click start</p>
                </Col>
                <Col xm={12} md={6} lg={4}>
                    <p>this page changes background color scheme every 20 seconds if you click start</p>
                </Col>
            </Row>
            <Row>
            <p>this page changes background color scheme every 20 seconds if you click start</p>
            <Link to="/exercise">
                <Button className="runButton shadow" onClick={handleRunSet}>Run Set</Button> 
            </Link>
            </Row>
        </Container>
    )
}

export default Welcome
