import React from 'react';

const RenderMealOptionList = props => {

    const renderOptions = props.content.options.map((option,index) => 
    <button  className ="renderMealOptionList__item btn btn--black"
        key={index} 
        onClick={ () => props.addItem(props.item,option.value)}
        >
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


