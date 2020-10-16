import React from 'react';
import RenderCardList from './RenderCardList';


const FavoriteCards = props => {

    return(
    <>
        {props.state.favoriteRecipes &&  
        <RenderCardList 
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

export default FavoriteCards;



