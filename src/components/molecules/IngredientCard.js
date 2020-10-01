import React from 'react';

const IngredientCard = props => {
    
    return(
        <div>
            {props.item.image && <img style={{height: "30px"}} alt={props.item.text} src={props.item.image}/>}
            <span>{props.item.text}</span>
        </div>
    );


}

export default IngredientCard;