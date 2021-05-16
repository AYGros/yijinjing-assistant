import React from 'react'
import {Button} from "react-bootstrap"
import {useState, useEffect} from "react";
import {Howl, Howler} from "howler";


const backgrounds=[
    "linear-gradient(358deg,var(--spring-green),var(--juicy-mango)",
    "linear-gradient(358deg,var(--pool-blue),var(--aqua-green)" ,
    "linear-gradient(358deg,var(--pale-magenta),var(--pale-mandarin)",
    "linear-gradient(358deg,var(--pale-green),var(--pale-yellow)" ,
    "linear-gradient(358deg,var(--lavender),var(--pale-blue)" ,
    "linear-gradient(358deg,var(--deep-purple),var(--dark-mauve)" ,
    "linear-gradient(358deg,var(--deep-red),var(--soft-pink)" ,
    "linear-gradient(358deg,var(--light-mud),var(--lady-grey)" ,
    "linear-gradient(358deg,var(--light-mauve),var(--horizon-blue)" ,
    "linear-gradient(358deg,var(--night-blue),var(--dawn-orange)" ,
    "linear-gradient(358deg,var(--deep-teal),var(--lime-green)" ,
    "linear-gradient(358deg,var(--fresh-yellow),var(--aqua-blue)" 
]
   
const Main = () => {

const [section, setSection]=useState(0);
const [color, setColor]= useState();
const [isRunning, setIsRunning]=useState(false);

const sectionStartSound = new Howl({
    src: ['/sounds/softBell.mp3'],
    volume: 0.4
})

useEffect(()=>{
    if(isRunning && section <= backgrounds.length) {
        setColor(backgrounds[section-1])
        console.log(backgrounds.length)
        sectionStartSound.play();
        document.getElementById("main").style.background = color;
        document.getElementById("main").style.backgroundSize = '400% 400%';
        document.getElementById("main").style.WebKitAnimation = 'AnimationName 17s ease infinite';
        document.getElementById("main").style.MozAnimation = 'AnimationName 17s ease infinite';
        document.getElementById("main").style.animation = 'AnimationName 17s ease infinite';
        let interval = setInterval(()=>{
            setSection(section=>section+1);
            setColor(backgrounds[section]);
            
        }, 120000);
        return ()=>clearInterval(interval);
    }
}, [isRunning, section, color])

const handleRunSet = () => {
    setSection(1);
    setColor(backgrounds[section-1])
    setIsRunning(true);
 
 
 /*if(color===backgrounds[0]) 
 setColor(backgrounds[1]) 
 else setColor(backgrounds[0])
 document.getElementById("main").style.background = color;*/
}

    return (
        <div className="mainContainer" id="main">
         <h1>Main</h1> 
         <p>this page changes background color scheme after 30 seconds</p>
         <Button onClick={handleRunSet}>Start</Button>  
        </div>
    )
}

export default Main
