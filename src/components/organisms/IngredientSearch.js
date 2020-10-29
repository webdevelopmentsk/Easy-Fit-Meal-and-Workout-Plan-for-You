import React from 'react';
import AutoCompleteInput from '../molecules/AutoCompleteInput';
import IconTrash from '../atoms/IconTrash';

const IngredientSearch = props => {

    return(
        <div className = "ingredientSearch__container">

            <h3 className ="ingredientSearch__heading heading heading__s"> {props.content.text}
                <div className ="ingredientSearch__heading--underline BG__yellowOrange"></div>
            </h3>

            <AutoCompleteInput 
                content = {props.content}
                onSearchSubmit={props.addItem}
                type ={props.content.type}
                showQuantity = {false}
            />
            {
                props.state.searchIngredients &&
                props.state.searchIngredients.map((item,index) => 
                <div className = "ingredientSearch__item" 
                key={index}>{item}
                <span className = "ingredientSearch__trash">
                    <IconTrash 
                    deleteItem = {props.deleteItem} 
                    type={props.content.type}/>
                </span>
                </div>)
            }

        </div>
    );
};

export default IngredientSearch;


