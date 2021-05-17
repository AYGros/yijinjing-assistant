import React from 'react'
import { useEffect} from "react";
import {Howl} from "howler";

const Exercise = ({backgrounds, section, setSection, isRunning, color, setColor}) => {

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
                
            }, 20000);
            return ()=>clearInterval(interval);
        }
    }, [isRunning, section, color])

    return (
        <div>
            <p>this page changes background color scheme every 20 seconds</p>
        </div>
    )
}

export default Exercise