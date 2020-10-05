import React from 'react'

const UserItemList = props =>{
    

    return (
        <div 
        onClick ={ async() => {

            props.onClickSelectFoodItem(props.item,props.type);
        }}
        
        style={{display:"flex", flexWrap: "wrap"}}>
            <span> {props.tag1} </span>
            <span> {props.tag2} </span>
            <span> {props.tag3} </span>
        </div>
    )

};

export default UserItemList;