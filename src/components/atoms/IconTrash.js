import React from 'react';

const IconTrash = props => {
    const {deleteItem,type} = props;

    return (
        <i className="icon trash alternate outline" onClick = {e => deleteItem(e.target.parentNode.textContent,type)}></i>
    )
}

export default IconTrash;