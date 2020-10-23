import React from 'react';

const RenderMealOptionList = props => {

    const renderOptions = props.content.map((option,index) => 
    <a  href="#/"
        key={index} 
        onClick={ () => props.addItem(props.item,option.value)}
        >
        {option.name}
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

export default RenderMealOptionList;


