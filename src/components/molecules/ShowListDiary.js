import React , { useState } from 'react';
import Button from '../atoms/Button';
import IconTrash from '../atoms/IconTrash'
import AddUserItem from './AddUserItem';


const ShowListDiary = props => {
    
    const [open, setOpen] = useState(false);

    const renderList = props.list.map((item,index) => 
    <div className = "" key={index}>{item.displayItem}

        <IconTrash deleteItem = {props.deleteItem} type={props.type} value = {item.label}/></div>);

    return(<> 
    {props.list && renderList}
    <Button className = "btn btn-light" onClickButton = {() => {setOpen(!open)}}text ={props.content.addItem.text} />
    {
                open && <AddUserItem 
                type ={props.type}
                state = {props.state}
                content ={props.content.addItem}
                onSearchSubmit ={props.onUserItemAdded}
                searchItemType ={props.searchItemType}
                onClickSelectItem = {props.onClickSelectItem}
                />
    }
    </>);
}

export default ShowListDiary;