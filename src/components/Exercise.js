import React from 'react'
import { useEffect} from "react";
import { Row, Col, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


const Exercise = ({backgrounds, mySetting, section, sectionStartAudio, backgroundAudio, setSection, isRunning, setIsRunning, color, setColor, handleRestart}) => {

    const history=useHistory();

    const endAudio = new Audio('/sounds/notifications/endGong.mp3');
    endAudio.volume = 0.4;

    let myTime=parseInt(mySetting.time)*60000;
    console.log(myTime);

    useEffect(()=>{
        if(section <= backgrounds.length) {
            setColor(backgrounds[section-1])
            sectionStartAudio.play();
            document.getElementById("main").style.background = color;
            document.getElementById("main").style.backgroundSize = '400% 400%';
            document.getElementById("main").style.WebKitAnimation = 'AnimationName 17s ease infinite';
            document.getElementById("main").style.MozAnimation = 'AnimationName 17s ease infinite';
            document.getElementById("main").style.animation = 'AnimationName 17s ease infinite';
            let interval = setInterval(()=>{
                setSection(section=>section+1);
                setColor(backgrounds[section]);
                
            }, myTime);
            return ()=>clearInterval(interval);
        }
    }, [isRunning, section, color])

    useEffect(()=>{
       if (section > 12) {
           setIsRunning(false);
           endAudio.play();
           history.push("/cooldown");
           backgroundAudio.current.pause();
           document.getElementById("main").style=null;
       }
    }, [section])

    return (
        <div>
            <p>this page changes background color scheme every {myTime/1000} seconds</p>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h3 className="sectionNumber">Section {section}</h3>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                <Button onClick={handleRestart}>restart</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Exercise