import React from 'react';
import ShowListFoodDiary from '../molecules/ShowListFoodDiary';

const FoodDiary = props => {

    return(
        <>
            <br />
            <div>{props.content.foodDiary.text}</div>
            {
                props.content.foodDiary.options.map((meal,index)=>{
                return  <div key ={index}>
                            <div>{meal.name}</div>
                            {props.state.foodDiary[meal.value] ?
                            <ShowListFoodDiary 
                            content = {props.content}
                            state ={props.state}
                            list = {props.state[meal.value]}
                            type = {meal.value}
                            deleteItem ={props.deleteItem}
                            onUserFoodItemAdded ={props.onUserFoodItemAdded}
                            searchItemType = {props.searchItemType}
                            onClickSelectFoodItem = {props.onClickSelectFoodItem}
                            />
                            :null}
                        </div>
                })
            }
        </>

    );
}

export default FoodDiary;
