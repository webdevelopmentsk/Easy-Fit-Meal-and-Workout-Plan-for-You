import React from 'react';
import WorkoutCard from './WorkoutCard';

const WorkoutCardList = props =>{

        return(<> 
                {props.list && props.list.map((item,index) =>
                    <div key={index}>
                    <WorkoutCard 
                    item={item} 
                    content ={props.content} 
                    contentFoodDiary ={props.contentFoodDiary}
                    list ={props.list} 
                    onChangeItem={props.onChangeItem}
                    checkFavoriteRecipe ={props.checkFavoriteRecipe}
                    onClickIconAddFoodRecipe ={props.onClickIconAddFoodRecipe}
                    /></div>
                )}
            </>);
}

export default WorkoutCardList;
