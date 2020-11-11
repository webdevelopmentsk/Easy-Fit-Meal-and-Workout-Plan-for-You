import React from 'react';

const PlanCard = props => {

    const {type,option,cardKey,setClassName} = props;

    return(
            <div className= {setClassName} onClick = {() => props.onClickOption(option,type,cardKey)}>
                <div className="planCard__heading heading heading__s u-color-white u-bg-color-black u-p-05rem">{option.name}</div>
                <div className="planCard__image">
                    <div 
                        className="planCard__image--content"
                        style = {{backgroundImage: `url(${option.image})`}}
                    >
                    </div>
                </div>
                <div className="planCard__detail paragraph paragraph--dark">{option.text}</div>
            </div>
    )

}

export default PlanCard;

