import React from 'react';

const RenderMealOptionList = props => {

    const renderOptions = props.content.options.map((option,index) => 
    <button  className ="renderMealOptionList__item btn btn--addToDiary"
        key={index} 
        onClick={ () => props.addItem(props.item,option.value)}
        >
        {option.name}
    </button>
    );

    return (

        <div className ="renderMealOptionList__container">
            <div className ="renderMealOptionList__heading">
                <div className ="renderMealOptionList__heading__text">
                {`${props.content.textAddToDiary} `}
                </div>
                <i className="caret right icon renderMealOptionList__heading__icon"></i>
            </div>
            <div className ="renderMealOptionList__item__container">
            {props.content && renderOptions}
            </div>
        </div>

    );

}

export default RenderMealOptionList;


