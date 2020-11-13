import React, { useState } from 'react';

const IconFavorite = props => {
    const [like, setLike] = useState(props.isLiked);

    const toggleIcon = () => {
        setLike(!like);
        props.onClickIcon(props.item,props.type)
    };

    return (
        <i className= {`${like? "fa fa-heart":"heart outline icon"} u-font-btn-l u-m-left-small`}
        style = {{color: like? "#8B0000" : "black"}}
        onClick={toggleIcon}></i>
    )
}

export default IconFavorite;

