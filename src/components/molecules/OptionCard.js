import React from 'react';

const OptionCard = props => {

    const {type,option,onClickOption} = props;
    
    return(
        <>
            <a href="#/" onClick = {() => onClickOption(option,type)}>
                <div className="card">
                    <div className="image">
                    <img alt = "option" src={option.image} style={{height:"60px"}}/>
                    </div>
                    <div className="content">
                    <div className="header">{option.name}</div>
                    <div className="description">
                    {option.text}
                    </div>
                    </div>
                </div>
            </a>
        </>
    )

}

export default OptionCard;