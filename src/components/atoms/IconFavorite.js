import React, {useState, useEffect} from 'react';

const IconFavorite = props => {
    const [like, setLike] = useState(false);
    useEffect(()=>{
        if(props.isLiked){setLike(true)}
    },[])

    const toggleIcon = () => {
        setLike(!like);
        props.onClickIcon(props.item,props.type)
    };

    return (
        <i className="heart outline icon" style ={{backgroundColor: like? "red": "white"}} onClick={toggleIcon}></i>
    )
}

export default IconFavorite;


