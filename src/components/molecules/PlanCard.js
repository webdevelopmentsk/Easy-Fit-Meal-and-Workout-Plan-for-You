import React from 'react';

const PlanCard = props => {

    const {type,option,onClickOption} = props;
    
    return(
        <>
            <a className = "optionCard__container" href="#/" onClick = {() => onClickOption(option,type)}>

                <div className="optionCard__image">
                    <img className="optionCard__image--content" alt = "option" src={option.image} />
                </div>
                <div className="optionCard__content">
                    <div className="optionCard__heading">{option.name}</div>
                    <div className="optionCard__detail">{option.text}</div>
                </div>

            </a>
        </>
    )

}

export default PlanCard;