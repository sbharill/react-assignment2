import React from 'react'

const validatecomponent = (props) => {
    return(
        <div>
        {props.leng<5?
        <p>Too short</p>:
        props.leng>5?
        <p>Too long</p>:
        <p>Good to go</p>
        }
        </div>

    )
}

export default validatecomponent