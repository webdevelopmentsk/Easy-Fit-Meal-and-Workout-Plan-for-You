import React  from 'react';

const CheckBoxFilter = props => {

    return (
        <>
        {
            props.showCheckBoxes &&
            <div className ="checkBoxFilter__container">
                <div className ="checkBoxFilter__heading">
                    <h3 className ="checkBoxFilter__heading--content heading heading__s"> {props.text} 
                        <div className ="checkBoxFilter__heading--underline BG__yellowOrange"></div>
                    </h3>
                </div>
                <div className ="checkBoxFilter__list">
                {props.options.map((option,index) => {
                    return(
                        <div className ="checkBoxFilter__item" key = {index} >
                        <input 
                            className ="checkBoxFilter__item__input"
                            type="checkbox" 
                            id={option.value} 
                            name ={option.value}
                            defaultChecked = {props.checkedBoxes.indexOf(option.value) > -1 ? true: false }
                            onClick ={event => props.onClickCheckBox(event.target.name,props.type)}/>
                        <label
                        className ="checkBoxFilter__item__label"
                         htmlFor = {option.value} >{option.name}</label>
                        </div>
                    );
                })}
                </div>
            </div>
        }
        </>
    );

}

export default CheckBoxFilter;
