import React from 'react';
import AutoCompleteInput from '../molecules/AutoCompleteInput';
import ShowSuggestionList from '../molecules/ShowSuggestionList';

const UserAddItemForm = props => {

    return(
        <div className = "userAddItemForm__container">

            <AutoCompleteInput 
            content = {props.content}
            onSearchSubmit={props.onSearchSubmit}
            type ={props.type}
            state = {props.state}
            showQuantity = {true}
            toggleButtonAddItem = {props.toggleButtonAddItem}
            />

            <div className = "userAddItemForm__result">

                {props.state[props.searchItemType] &&
                props.state[props.searchItemType].map((item,index) =>
                <ShowSuggestionList
                    type = {props.type}
                    searchItemType ={props.searchItemType}
                    key ={index}
                    item ={item}
                    onClickSelectItem ={props.onClickSelectItem}
                    toggleButtonAddItem = {props.toggleButtonAddItem}
                />)
            }
            </div>
            
        </div>
    );

};

export default UserAddItemForm;

