import React from 'react';
import IconTrash from '../atoms/IconTrash'

const ShowListFoodDiary = props => {

    const renderList = props.list.map((item,index) => 
    <div key={index}>{item.recipe.label}<IconTrash deleteItem = {props.deleteItem} type={props.type}/></div>);

    return(<> {props.list && renderList}</>);
}

export default ShowListFoodDiary;