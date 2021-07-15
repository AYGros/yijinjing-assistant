import React from 'react'
import {Link} from "react-router-dom";
import {Button, Row, Col, Container, Form} from "react-bootstrap";

const Welcome = ({handleRunSet, onChangeForm, mySetting, backgroundAudio}) => {
    
    return (
        <Container className="welcomeContainer">
            <Row className="justify-content-around" >
            <Form>
                <Form.Row className="align-items-baseline justify-content-around" > 
                    <Col md={4} className="justify-content-center">
                    <Form.Group controlId="sectionTime">
                        <Form.Label>Your section time</Form.Label>
                        <Form.Control 
                        name="time" 
                        as="select" 
                        onChange={onChangeForm} 
                        value={mySetting.time} 
                        >
                            {/*<option>Choose...</option>*/}
                            <option value="1">1 minute</option>
                            <option value="2">2 minutes</option>
                            <option value="3">3 minutes</option>
                            <option value="4">4 minutes</option>
                            <option value="5">5 minutes</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col md={4} >
                    <Form.Group controlId="sectionNotification">
                        <Form.Label>Your section notification</Form.Label>
                        <Form.Control 
                        name="notification" 
                        as="select" 
                        onChange={onChangeForm} 
                        selected={mySetting.notification}
                        >
                            <option>Choose...</option>
                            <option value="softBell.mp3">Gong</option>
                            <option value="zapsplatHarpAndMallet.mp3">Harp Glissando</option>
                            <option value="Numbers">Numbers</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="align-items-baseline justify-content-around"> 
                    <Col md={4}>
                    <Form.Group controlId="instructions">
                        <Form.Label>Show instructions?</Form.Label>
                        <div key="inline-radio">
                        <Form.Check 
                        inline label="Yes" 
                        name="instructions" 
                        type="radio" 
                        id="radio-yes" 
                        value="yes"
                        checked={mySetting.instructions === "yes"}
                        onChange={onChangeForm}
                        />
                        <Form.Check 
                        inline label="No" 
                        name="instructions" 
                        type="radio" 
                        id="radio-no" 
                        value="no"
                        checked={mySetting.instructions === "no"}
                        onChange={onChangeForm}
                        />
                        </div>
                    </Form.Group>
                    </Col>
                    <Col md={4} >
                    <Form.Group controlId="backgroundSound">
                        <Form.Label>Your background sound</Form.Label>
                        <Form.Control 
                        name="background" 
                        as="select" 
                        onChange={onChangeForm} 
                        selected={mySetting.background} 
                        >
                            <option value="">Choose...</option>
                            <option value="Crickets">Night Crickets</option>
                            <option value="Waves">Waves</option>
                            <option value="Forest">Summer Forest</option>
                            <option value="Rain">Rain And Thunder</option>
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
