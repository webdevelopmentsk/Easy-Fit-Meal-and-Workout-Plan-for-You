import React from 'react';

const Image = props => {
    const {src,alt,href,onClickImage} = props;

    return (
        <a className="image" href={href} onClick ={onClickImage?onClickImage:null}><img src={src} alt ={alt} /></a>
    )
}

export default Image;