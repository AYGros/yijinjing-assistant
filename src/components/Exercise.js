import React from 'react'
import { useEffect} from "react";
import { useHistory } from "react-router-dom";
import {Howl} from "howler";

const Exercise = ({backgrounds, section, setSection, isRunning, setIsRunning, color, setColor}) => {

    const history=useHistory();

    const endSound = new Howl({
        src: ['/sounds/endGong.mp3'],
        volume: 0.4
    })

    const sectionStartSound = new Howl({
        src: ['/sounds/softBell.mp3'],
        volume: 0.4
    })
    
    useEffect(()=>{
        if(isRunning && section <= backgrounds.length) {
            setColor(backgrounds[section-1])
            sectionStartSound.play();
            document.getElementById("main").style.background = color;
            document.getElementById("main").style.backgroundSize = '400% 400%';
            document.getElementById("main").style.WebKitAnimation = 'AnimationName 17s ease infinite';
            document.getElementById("main").style.MozAnimation = 'AnimationName 17s ease infinite';
            document.getElementById("main").style.animation = 'AnimationName 17s ease infinite';
            let interval = setInterval(()=>{
                setSection(section=>section+1);
                setColor(backgrounds[section]);
            }, 10000);
            return ()=>clearInterval(interval);
        }
    }, [isRunning, section, color])

    useEffect(()=>{
       if (section > 12) {
           setIsRunning(false);
           endSound.play();
           history.push("/");
       }
    }, [section])

    return (
        <div>
            <p>this page changes background color scheme every 20 seconds</p>
        </div>
    )
}

export default Exercise