import React , { useState }  from 'react';
import clientFood from '../../apis/client'; 
import suggestedActivities from '../../algorithms/suggestedActivities';

const createSuggestions = async (type,value) =>{
    let suggestions=[];

    if(type === 'searchIngredients' || type === 'searchBreakfast'||
       type === 'searchLunch'|| type === 'searchDinner'|| type === 'searchSnacks' ||
       type === 'breakfast' || type === 'lunch' || type === 'dinner' || type === 'snacks'){
       
        suggestions = await clientFood.autocomplete({query: value}, {limit: 5})
    }

    if(type === 'cardio' || type ==='strength' || type ==='flexibility' || type ==='otherActivities'){
        suggestions = suggestedActivities(type,value);
    }

    return suggestions;
}

const AutoCompleteInput = props =>{

    const [suggestions,setSuggestions] = useState('');
    const [text, setText] = useState('');
    const [quantity, setQuantity] = useState('');

    const onTextChanged = async e => {
        const value = e.target.value;
        let suggestions = [];
        try{
            if (value.length > 0){
                suggestions = await createSuggestions(props.type,value)
            }
            setSuggestions(suggestions);
        }catch (error) {

        }
        setText(value);
    };
    
    const onQuantityChange =  e =>{
        let value = e.target.value;
        if(value < 0){
            value = prompt(props.content.placeholderQuantity + " (> 0)");
        }
        setQuantity(value);
    }

    const suggestionSelected = item =>{
        setText(item);
        setSuggestions('');
        if(props.showQuantity){
            item && quantity && props.onSearchSubmit(item,props.type,quantity); 
            setQuantity('');
        }
        else{
            item && props.onSearchSubmit(item,props.type); 
        }
        setText('');
        if(props.type === 'cardio' || props.type ==='strength' || props.type ==='flexibility' || props.type ==='otherActivities'){
            props.toggleButtonAddItem();
        }
    };

    const onFormSubmit = e =>{
        e.preventDefault();
        setSuggestions('');
        if(props.showQuantity){
            text && quantity && props.onSearchSubmit(text,props.type,quantity); 
            setQuantity('');
        }
        else{
            text && props.onSearchSubmit(text,props.type); 
        }
        setText('');
    };

    return(
        <form onSubmit ={onFormSubmit} className="autoCompleteInput__container">
            {
                props.showQuantity && 
                <input
                className="autoCompleteInput__item"
                type = "number"
                placeholder = {props.content.placeholderQuantity}
                value ={quantity}
                onChange = {onQuantityChange} 
            />
            }
            <input 
            className="autoCompleteInput__item"
            onChange = {onTextChanged} 
            type="text" 
            value = {text}
            placeholder= {props.content.placeholderSearch} 
            />
            <ul className="autoCompleteInput__ul">
                {suggestions.length > 0 && 
                suggestions.map((item,index) => 
                <div className="autoCompleteInput__li"
                onClick ={()=> suggestionSelected(item)}
                key={index}>{item}
                </div>)
            }
            </ul>
        </form>);

}

export default AutoCompleteInput;
