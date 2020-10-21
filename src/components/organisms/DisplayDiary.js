import React from 'react';
import ShowListDiary from '../molecules/ShowListDiary';

const DisplayDiary = props => {

    return(
        <div className ="diary">
            <div className="diary__heading">{props.content.text}</div>
            {
                props.content.options.map((obj,index)=>{
                return  <div key ={index}>
                            <div className="diary__item">{obj.name}</div>
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
        </div>

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