import React from 'react';
import AutoComplete from './AutoComplete';
import UserItemList from './UserItemList';

const AddUserItem = props => {

    return(
        <>
            <div>
                <AutoComplete 
                content = {props.content}
                onSearchSubmit={props.onSearchSubmit}
                type ={props.type}
                state = {props.state}
                showQuantity = {true}
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
                    onClickSelectItem ={props.onClickSelectItem}

                />)
            }
        </>
    );

};

export default AddUserItem;

