import React from 'react';

const RenderDiaryOptionList = props => {

    const renderOptions = props.content.options.map((option,index) => 
    <button  className ="renderDiaryOptionList__item btn btn--black"
        key={index} 
        onClick={ () => props.addItem(props.item,option.value)}
        >
        {option.name}
    </button>
    );

    return (

        <div className ="renderDiaryOptionList__container">
            {props.content && renderOptions}
        </div>

    );

}

export default RenderDiaryOptionList;


