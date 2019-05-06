import React from 'react'
import "./CharComponent.css"

const charComponent = (props) => {
    return(
        <p className="charcomponent" onClick={props.click}>{props.char}</p>
    )
}

export default charComponent