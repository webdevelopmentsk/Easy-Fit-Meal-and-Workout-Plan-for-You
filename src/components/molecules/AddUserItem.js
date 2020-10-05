import React , { useState, useEffect } from 'react';
import AutoComplete from './AutoComplete';
import UserItemList from './UserItemList';

const AddUserItem = props => {


    return(
        <>
            <div>
                <AutoComplete 
                placeholder = {props.content.placeholder}
                onSearchSubmit={props.onSearchSubmit}
                type ={props.type}
                />
            </div>
            <div>{props.content.searchResults}</div>
            {props.state[props.searchItemType] &&
                props.state[props.searchItemType].map((item,index) =>
                <UserItemList
                    type = {props.type}
                    searchItemType ={props.searchItemType}
                    key ={index}
                    item ={item}
                    tag1= {item.recipe.label}
                    tag2= {item.recipe.calories}
                    tag3= {item.recipe.eneryUnit}
                    onClickSelectFoodItem ={props.onClickSelectFoodItem}

                />)
            }
        </>
    );

};

export default AddUserItem;

