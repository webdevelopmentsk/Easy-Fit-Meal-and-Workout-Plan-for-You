import React from 'react';
import ChooseOptionList from '../organisms/ChooseOptionList';
import RecipeCardList from './RecipeCardList';

const SuggestedRecipe = props =>{
    
    return (
    <>
        <ChooseOptionList 
        content = {props.content.mealPlanRecipes}
        onClickOption = {props.onSelectMealPlan}
        />
        {
            props.state.mealPlanRecipes && 
            <RecipeCardList 
            content = {props.content.recipeCard}
            contentFoodDiary = {props.content.foodDiary}
            list = {props.state.mealPlanRecipes}
            onChangeItem = {props.onChangeItem}
            checkFavoriteRecipe = {props.checkFavoriteRecipe}
            onAddFoodRecipe ={props.onAddFoodRecipe}
            onClickIconAddFoodRecipe ={props.onClickIconAddFoodRecipe}
            />
        }
    </>);
}

export default SuggestedRecipe;



