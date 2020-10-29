import React from 'react';

const RenderRecipeIngredientList = props => {

    return(
    <div className ="renderRecipeIngredientList__container"> 
            {props.list ?
            props.list.map((item,index) => 
            <div className ="renderRecipeIngredientList__item" key={index}>
                {item.image ? 
                <img className ="renderRecipeIngredientList__item__image" alt={item.text} src={item.image}/>
                : 
                <img className ="renderRecipeIngredientList__item__image" alt={item.text} src={'https://i.imgur.com/sjDBHUW.png'}/>
                }
                <span className ="renderRecipeIngredientList__item__text">{item.text}</span>
            </div>)
            :null}
    </div>

    );
};

export default RenderRecipeIngredientList;
