import React from 'react';

const CheckBoxGroup = props => {
    //Add Arrays of checkboxes here:
    const {state,text, options, onClickCheckBox,type} = props;
    const checkedBoxes = [...state.foodPreferences,...state.meals]
    return (
        <>
            <br />
            <p> {text} </p>
            {options.map((option,index) => {
                return(
                    <div className ="test" key = {index} >
                    <input 
                        type="checkbox" 
                        id={option.value} 
                        name ={option.value}
                        defaultChecked = {checkedBoxes.indexOf(option.value) > -1 ? true: false }
                        onClick ={event => onClickCheckBox(event.target.name,type)}/>
                    <label htmlFor = {option.value} >{option.name}</label>
                    </div>
                );
            })}
        </>
    );

}

export default CheckBoxGroup;
