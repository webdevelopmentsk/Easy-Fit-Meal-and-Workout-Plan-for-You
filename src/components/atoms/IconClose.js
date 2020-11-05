import React from 'react';

const IconClose = props => {

    return (
        <i className="window close outline icon u-m-left-small" onClick={() => props.onClickIcon()}></i>
    )
}

export default IconClose;
