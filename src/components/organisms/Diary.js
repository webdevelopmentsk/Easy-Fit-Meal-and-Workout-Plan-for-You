import React from 'react';
import RenderListInDiary from '../molecules/RenderListInDiary';

const Diary = props => {

    return(
        <div className ="diary__container">
            <div className ="diary__heading">
                <h3 className="heading__text heading heading__s">
                    {props.content.text}
                <div className="heading__text__underline" ></div>
                </h3>
            </div>
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
                            resetUserItems ={props.resetUserItems}
                            />
                            :null}
                        </div>
                })
            }
        </div>

    );
}

export default Diary;
