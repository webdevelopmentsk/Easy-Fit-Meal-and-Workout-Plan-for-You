import React from 'react';
import RenderListInDiary from '../molecules/RenderListInDiary';

const Diary = props => {

    return(
        <div className ="diary__container">
            <h3 className="u-m-auto heading heading__s heading__dark  BG__light">{props.content.text}</h3>
            {
                props.content.options.map((obj,index)=>{
                return  <div key ={index}>
                            <div className="diary__item">{obj.name}</div>
                            {props.state[obj.value] ?
                            <RenderListInDiary 
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

export default Diary;
