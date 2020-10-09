import React from 'react';

import ShowList from '../molecules/ShowList';
import AutoComplete from '../molecules/AutoComplete';

const IngredientSearch = props => {

    return(
        <>
            <br />
            <div>{props.content.text}</div>
            <br />
            <AutoComplete 
                placeholder = {props.content.placeholder}
                onSearchSubmit={props.addItem}
                type ={props.content.type}
                items ={props.autoComplete}
            />
            <br />
            <ShowList 
                list = {props.state.searchIngredients} 
                deleteItem = {props.deleteItem} 
                type ={props.content.type}
            />

        </>
    );
};

export default IngredientSearch;


