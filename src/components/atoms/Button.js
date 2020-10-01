import React from 'react';

const Button = props => {

    return (
    <button onClick = {props.onClickButton}>{props.text}</button>
    )
}

export default Button;
