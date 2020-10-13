import React from 'react';

const IconTrash = props => {
    const {deleteItem,type, value} = props;

    return (
        <i className="icon trash alternate outline" onClick = {e => deleteItem(value,type)}></i>
    )
}

export default IconTrash;