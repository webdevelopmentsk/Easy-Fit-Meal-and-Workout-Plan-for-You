import React from 'react';
import RenderItemCardList from './RenderItemCardList';


const RenderFavoriteCardList = props => {

    return(
    <>
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
    </>);
};

export default RenderFavoriteCardList;



