import React  from 'react';
import ChooseOptionList from '../organisms/ChooseOptionList';
import RecipeCardList from './RecipeCardList';
import CheckBoxGroup from '../molecules/CheckBoxGroup';
const SuggestedRecipe = props =>{
    

    return (
    <>
        <ChooseOptionList 
        content = {props.content.mealPlanRecipes}
        onClickOption = {props.onSelectMealPlan}
        />
        {
            props.state.mealPlanRecipes.total && 
            <>
                <CheckBoxGroup 
                    state= {props.state}
                    text={props.content.searchMeals.text} 
                    options ={props.content.searchMeals.options}
                    onClickCheckBox = {props.onChangeItem}
                    type = {props.type}
                    checkedBoxes ={props.checkedBoxes}
                />

                <RecipeCardList 
                    content = {props.content.recipeCard}
                    contentFoodDiary = {props.content.foodDiary}
                    list = {props.state.mealPlanRecipes.rendered}
                    onChangeItem = {props.onChangeItem}
                    checkFavoriteRecipe = {props.checkFavoriteRecipe}
                    onAddFoodRecipe ={props.onAddFoodRecipe}
                    onClickIconAddFoodRecipe ={props.onClickIconAddFoodRecipe}
                />
            </>

        }
    </>);
}

export default SuggestedRecipe;



