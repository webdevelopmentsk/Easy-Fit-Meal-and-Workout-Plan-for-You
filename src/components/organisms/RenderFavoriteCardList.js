import React from 'react';
import RenderItemCardList from './RenderItemCardList';


const RenderFavoriteCardList = props => {

    return(
    <div className ="renderFavoriteCardList__container">
        {props.state.favoriteRecipes &&  
        <RenderItemCardList 
        content = {props.content.card}
        contentDiary = {props.content.diary}
        list = {props.state[props.mainState]}
        onChangeItem = {props.onChangeItem}
        checkIfFavorite = {props.checkIfFavorite}
        onAddItemToDiary ={props.onAddFoodRecipe}
        addItem ={props.addItem}
        />}
    </div>);
};

export default RenderFavoriteCardList;



