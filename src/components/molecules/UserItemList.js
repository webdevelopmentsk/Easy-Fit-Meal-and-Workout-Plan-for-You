import React from 'react'

const UserItemList = props =>{
    

    return (
        <div 
        onClick ={ async() => {

            props.onClickSelectItem(props.item,props.type);
        }}
        
        style={{display:"flex", flexWrap: "wrap"}}>
            <span>{`${props.tag1} ${props.tag2} ${props.tag3}`}</span>
        </div>
    )

};

export default UserItemList;