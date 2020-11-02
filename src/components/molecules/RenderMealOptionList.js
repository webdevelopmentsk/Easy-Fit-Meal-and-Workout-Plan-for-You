import React from 'react';
import IconAddItem from '../atoms/IconAddItem';

const RenderMealOptionList = props => {

    const renderOptions = props.content.map((option,index) => 
    <button  className ="renderMealOptionList__item btn btn--addToDiary"
        key={index} 
        onClick={ () => props.addItem(props.item,option.value)}
        >
        <IconAddItem />
        {option.name}
    </button>
    );

    return (

        <div className ="renderMealOptionList__container">
        {props.content && renderOptions}
        </div>

    );

}

export default RenderMealOptionList;


