import React from 'react';
import IconTrash from '../atoms/IconTrash'

const ShowList = props => {

    const renderList = props.list.map((item,index) => 
    <div key={index}>{item}<IconTrash deleteItem = {props.deleteItem} type={props.type}/></div>);

    return(<> {props.list && renderList}</>);
}

export default ShowList;

