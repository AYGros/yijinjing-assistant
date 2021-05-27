import React from 'react'
import {Link} from "react-router-dom";
import {Button, Row, Col, Container, Form} from "react-bootstrap";

const Welcome = ({handleRunSet, backgroundAudio}) => {
    
    return (
        <Container fluid className="welcomeContainer">
            <Row className="justify-content-center" >
            <Form>
                <Form.Row className="align-items-baseline" > 
                    <Col >
                    <Form.Group controlId="sectionTime">
                        <Form.Label>Your section time</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>1 minute</option>
                            <option>2 minutes</option>
                            <option>3 minutes</option>
                            <option>4 minutes</option>
                            <option>5 minutes</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col >
                    <Form.Group controlId="sectionNotification">
                        <Form.Label>Your section notification</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Gong</option>
                            <option>Harp Glissando</option>
                            <option>Numbers</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="align-items-baseline"> 
                    <Col>
                    <Form.Group controlId="instructions">
                        <Form.Label>Show instructions?</Form.Label>
                        <div key="inline-radio">
                        <Form.Check inline label="Yes" name="instructionsGroup" type="radio" id="radio-yes"/>
                        <Form.Check inline label="No" name="instructionsGroup" type="radio" id="radio-no"/>
                        </div>
                    </Form.Group>
                    </Col>
                    <Col >
                    <Form.Group controlId="backgroundSound">
                        <Form.Label>Your background sound</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Night Crickets</option>
                            <option>Waves</option>
                            <option>Summer Forest</option>
                            <option>Rain And Thunder</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="justify-content-center">
                <Button className="runButton shadow" onClick={handleRunSet}>Run Set</Button> 
                </Form.Row>
            </Form>
            </Row>
        </Container>
    )
}

export default Welcome
