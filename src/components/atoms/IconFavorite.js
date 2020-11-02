import React, { useState } from 'react';

const IconFavorite = props => {
    const [like, setLike] = useState(props.isLiked);

    const toggleIcon = () => {
        setLike(!like);
        props.onClickIcon(props.item,props.type)
    };

    return (
        <i className= "fa fa-heart iconLike"
        style = {{color: `${like? "#266150": "grey"}`}}
        onClick={toggleIcon}></i>
    )
}

export default IconFavorite;


