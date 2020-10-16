import React from 'react'

const UserItemList = props =>{
    

    return (
        <div 
        onClick ={ async() => {

            props.onClickSelectItem(props.item,props.type);
        }}
        
        style={{display:"flex", flexWrap: "wrap"}}>
            {props.item.displayItem}
        </div>
    )

};

export default UserItemList;