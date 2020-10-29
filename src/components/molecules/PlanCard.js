import React from 'react';

const PlanCard = props => {

    const {type,option,cardKey,setClassName} = props;

    return(
            <a className= {setClassName} onClick = {() => props.onClickOption(option,type,cardKey)}>
                <div className="planCard__heading BG__yellowOrange">{option.name}</div>
                <div className="planCard__image">
                    <div 
                        className="planCard__image--content"
                        style = {{backgroundImage: `url(${option.image})`}}
                    >
                    </div>
                </div>
                <div className="planCard__detail paragraph paragraph--dark">{option.text}</div>
            </a>
    )

}

export default PlanCard;
//<h3 className="planCard__content__heading--underline BG__whiteOrange"></h3>
//style = {{backgroundImage: `url(${option.image})`}}
