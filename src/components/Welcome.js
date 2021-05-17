import React from 'react'
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const Welcome = ({handleRunSet}) => {

    return (
        <div>
            <p>this page changes background color scheme every 20 seconds if you click start</p>
            <Link to="/exercise">
                <Button onClick={handleRunSet}>Start</Button>  
            </Link>
        </div>
    )
}

export default Welcome
