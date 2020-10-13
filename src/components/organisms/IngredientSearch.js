import React from 'react';

import ShowList from '../molecules/ShowList';
import AutoComplete from '../molecules/AutoComplete';

const IngredientSearch = props => {

    console.log(props)

    return(
        <>
            <br />
            <div>{props.content.text}</div>
            <br />
            <AutoComplete 
                content = {props.content}
                onSearchSubmit={props.addItem}
                type ={props.content.type}
                showQuantity = {false}
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


