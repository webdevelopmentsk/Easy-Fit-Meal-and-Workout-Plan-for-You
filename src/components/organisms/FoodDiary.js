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
                            {props.state[meal.value] ?
                            <ShowListFoodDiary 
                            list = {props.state[meal.value]}
                            type = {meal.value}
                            deleteItem ={props.deleteItem}
                            />
                            :null}
                        </div>
                })
            }
        </>

    );
}

export default FoodDiary;
