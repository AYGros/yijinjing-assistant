import { Button } from 'react-bootstrap';
import React from 'react'

const Cooldown = ({handleFinishSet, backgroundAudio}) => {

    return (
        <div>
            <Button onClick={handleFinishSet}>finish</Button>
        </div>
    )
}

export default Cooldown
