import React from 'react';
import ShowListDiary from '../molecules/ShowListDiary';

const DisplayDiary = props => {

    return(
        <>
            <br />
            <div>{props.content.text}</div>
            {
                props.content.options.map((obj,index)=>{
                return  <div key ={index}>
                            <div>{obj.name}</div>
                            {props.state[obj.value] ?
                            <ShowListDiary 
                            content = {props.content}
                            state ={props.state}
                            list = {props.state[obj.value]}
                            type = {obj.value}
                            deleteItem ={props.deleteItem}
                            onUserItemAdded ={props.onUserItemAdded}
                            searchItemType = {props.searchItemType}
                            onClickSelectItem = {props.onClickSelectItem}
                            />
                            :null}
                        </div>
                })
            }
        </>

    );
}

export default DisplayDiary;

/*
                            {props.state[props.content.stateName][obj.value] ?
                            <ShowListDiary 
                            content = {props.content}
                            state ={props.state}
                            list = {props.state[obj.value]}
                            type = {obj.value}
                            deleteItem ={props.deleteItem}
                            onUserFoodItemAdded ={props.onUserFoodItemAdded}
                            searchItemType = {props.searchItemType}
                            onClickSelectFoodItem = {props.onClickSelectFoodItem}
                            />
                            :null}
*/