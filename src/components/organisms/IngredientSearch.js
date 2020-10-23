import React from 'react';
import AutoCompleteInput from '../molecules/AutoCompleteInput';
import IconTrash from '../atoms/IconTrash';

const IngredientSearch = props => {

    return(
        <>
            <div>{props.content.text}</div>
            <AutoCompleteInput 
                content = {props.content}
                onSearchSubmit={props.addItem}
                type ={props.content.type}
                showQuantity = {false}
            />
            {
                props.state.searchIngredients &&
                props.state.searchIngredients.map((item,index) => 
                <div key={index}>{item}<IconTrash deleteItem = {props.deleteItem} type={props.content.type}/></div>)
            }

        </>
    );
};

export default IngredientSearch;


