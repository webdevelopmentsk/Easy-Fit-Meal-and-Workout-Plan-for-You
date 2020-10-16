import React  from 'react';

const CheckBoxGroup = props => {

    return (
        <>
        {
            props.showCheckBoxes &&
            <>
                <br />
                <p> {props.text} </p>
                {props.options.map((option,index) => {
                    return(
                        <div className ="test" key = {index} >
                        <input 
                            type="checkbox" 
                            id={option.value} 
                            name ={option.value}
                            defaultChecked = {props.checkedBoxes.indexOf(option.value) > -1 ? true: false }
                            onClick ={event => props.onClickCheckBox(event.target.name,props.type)}/>
                        <label htmlFor = {option.value} >{option.name}</label>
                        </div>
                    );
                })}
            </>
        }
        </>
    );

}

export default CheckBoxGroup;
