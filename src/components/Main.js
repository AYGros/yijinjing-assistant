import React from 'react'
import {Button} from "react-bootstrap"
import {useState, useEffect} from "react";
import {Howl} from "howler";



const Main = ({children}) => {

    return (
        <div className="mainContainer" id="main">
         {children} 
        </div>
    )
}

export default Main
