import React from 'react';

const ChooseMeal = props => {

    const renderOptions = props.content.map((meal,index) => 
    <a 
        key={index} 
        href="#" 
        onClick={ () => props.onClickIconAddFoodRecipe(props.item,meal.value)}
        >
        {meal.name}
    </a>
    );

    return (
        <>
            <div style={{display: "flex"}}>
                {props.content && renderOptions}
            </div>
        </>
    );

}

export default ChooseMeal;


