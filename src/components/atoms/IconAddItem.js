import React from 'react';

const IconAddItem = props =>{
    return (
    <i className ="plus square outline icon" onClick = {() => props.onClickIcon(props.item,props.item.type)}>{props.text}</i>
        )
}

export default IconAddItem;
