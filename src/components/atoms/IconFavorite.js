import React, { useState } from 'react';

const IconFavorite = props => {
    const [like, setLike] = useState(props.isLiked);

    const toggleIcon = () => {
        setLike(!like);
        props.onClickIcon(props.item,props.type)
    };

    return (
        <i className="heart outline icon" style ={{backgroundColor: like? "red": "white"}} onClick={toggleIcon}></i>
    )
}

export default IconFavorite;


