import React from 'react';
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
                    tag1= {item.label}
                    tag2= {item.calories}
                    tag3= {item.eneryUnit}
                    onClickSelectFoodItem ={props.onClickSelectFoodItem}

                />)
            }
        </>
    );

};

export default AddUserItem;

