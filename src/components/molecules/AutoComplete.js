import React , { useState, useEffect}  from 'react';

const AutoComplete = props =>{
    
    const items = props.items;
    const [suggestions,setSuggestions] = useState([]);
    const [text, setText] = useState('');
    const onTextChanged = e => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0){
            const regex = new RegExp(`${value}`,'i');
            suggestions = items.sort().filter(v => regex.test(v));
        }
        setSuggestions(suggestions);
        setText(value);
    };

    const suggestionSelected = value =>{
        setText(value);
        setSuggestions([]);
        value && props.onSearchSubmit(value,props.type); 
        setText('');
    };
    /*
    useEffect(() => {
        const timerId = setTimeout(() => {
            //text && props.onSearchSubmit(text,props.type); setText('');
        }, 1500);
             
        return () => {
          clearTimeout(timerId);

        };
      }, [text]);
    */
    
    const onFormSubmit = e =>{
        e.preventDefault();
        setSuggestions([]);
        text && props.onSearchSubmit(text,props.type); 
        setText('');
    };

    return(
        <form onSubmit ={e =>onFormSubmit(e)}>
            <input 
            onChange = {onTextChanged} 
            type="text" 
            value = {text}
            placeholder= {props.placeholder} 
            />
            <ul>
                {suggestions.length > 0 && 
                suggestions.map((item,index) => 
                <div onClick ={()=> suggestionSelected(item)}key={index}>{item}</div>)}
            </ul>
        </form>);

}

export default AutoComplete;