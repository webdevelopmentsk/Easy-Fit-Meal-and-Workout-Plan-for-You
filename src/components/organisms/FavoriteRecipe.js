import React from 'react';
import RecipeCardList from './RecipeCardList';


const FavoriteRecipe = props => {

    return(
    <>
        {props.state.favoriteRecipes &&  
        <RecipeCardList 
        content = {props.content.recipeCard}
        contentFoodDiary = {props.content.foodDiary}
        list = {props.state.favoriteRecipes}
        onChangeItem = {props.onChangeItem}
        checkFavoriteRecipe = {props.checkFavoriteRecipe}
        onClickIconAddFoodRecipe ={props.onClickIconAddFoodRecipe}
        />}
    </>);
};

export default FavoriteRecipe;



