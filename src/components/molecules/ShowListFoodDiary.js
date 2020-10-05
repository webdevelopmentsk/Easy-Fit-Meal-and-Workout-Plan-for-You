import React , { useState } from 'react';
import Button from '../atoms/Button';
import IconTrash from '../atoms/IconTrash'
import AddUserItem from './AddUserItem';


const ShowListFoodDiary = props => {

    const [open, setOpen] = useState(false);

    const renderList = props.list.map((item,index) => 
    <div key={index}>{item.recipe.label}<IconTrash deleteItem = {props.deleteItem} type={props.type}/></div>);

    return(<> 
    {props.list && renderList}
    <Button onClickButton = {() => {setOpen(!open)}}text ={props.content.foodDiary.addFood.text} />
    {
                open && <AddUserItem 
                type ={props.type}
                state = {props.state}
                content ={props.content.foodDiary.addFood}
                onSearchSubmit ={props.onUserFoodItemAdded}
                searchItemType ={props.searchItemType}
                onClickSelectFoodItem = {props.onClickSelectFoodItem}
                />
    }
    </>);
}

export default ShowListFoodDiary;