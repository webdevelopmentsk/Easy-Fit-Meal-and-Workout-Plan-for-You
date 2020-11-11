import React , { useState } from 'react';
import Button from '../atoms/Button';
import IconTrash from '../atoms/IconTrash'
import UserAddItemForm from '../organisms/UserAddItemForm';


const RenderListInDiary = props => {
    
    const [open, setOpen] = useState(false);
    const toggleButtonAddItem = () => setOpen(!open);

    const renderList = props.list.map((item,index) => 
    <div className = "renderListInDiary__item" key={index}>
        <div className = "renderListInDiary__item__text" >{item.displayItem}</div>
        <IconTrash deleteItem = {props.deleteItem} type={props.type} value = {item.label}/></div>);

    return(
    <div className = "renderListInDiary__container"> 
        {props.list && renderList}
        <Button className = "btn btn--black btn--black--s" onClickButton = {toggleButtonAddItem} text ={props.content.addItem.text} />
        {
                    open && <UserAddItemForm 
                    type ={props.type}
                    state = {props.state}
                    content ={props.content.addItem}
                    onSearchSubmit ={props.onUserItemAdded}
                    searchItemType ={props.searchItemType}
                    onClickSelectItem = {props.onClickSelectItem}
                    toggleButtonAddItem = {toggleButtonAddItem}
                    />
        }
    </div>);
}

export default RenderListInDiary;