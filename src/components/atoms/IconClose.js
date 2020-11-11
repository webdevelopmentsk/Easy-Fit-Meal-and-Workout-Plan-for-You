import React from 'react';

const IconClose = props => {

    return (
        <i className="window close outline icon u-m-left-small u-font-btn-l" onClick={() => props.onClickIcon()}></i>
    )
}

export default IconClose;
