import React from 'react'

const ShowSuggestionList = props =>{
    
    const onUserSelectItem = (item,type) =>{
        if(type === 'searchIngredients'){
            props.deleteItem(item,type);
        }
        else{
            props.onClickSelectItem(item,type);
            props.toggleButtonAddItem();
        }
    }

    return (
        <div 
        onClick ={ async() => {
            onUserSelectItem(props.item,props.type);
        }}
        >
        {props.item.displayItem}
        </div>
    )

};

export default ShowSuggestionList;