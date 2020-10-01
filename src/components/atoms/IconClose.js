import React from 'react';

const IconClose = props => {

    const handleClose = () => {
        props.onClickIcon();
    };

    return (
        <i className="window close outline icon" onClick={handleClose}></i>
    )
}

export default IconClose;
