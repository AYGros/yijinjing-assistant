import React from 'react'
import { useEffect} from "react";
import { useHistory } from "react-router-dom";


const Exercise = ({backgrounds, section, sectionStartAudio, backgroundAudio, setSection, isRunning, setIsRunning, color, setColor}) => {

    const history=useHistory();

    const endAudio = new Audio('/sounds/endGong.mp3');
    endAudio.volume = 0.4;

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
                
            }, 10000);
            return ()=>clearInterval(interval);
        }
    }, [isRunning, section, color])

    useEffect(()=>{
       if (section > 12) {
           setIsRunning(false);
           endAudio.play();
           history.push("/cooldown");
           document.getElementById("main").style=null;
       }
    }, [section])

    return (
        <div>
            <p>this page changes background color scheme every 20 seconds</p>
        </div>
    )
}

export default Exercise