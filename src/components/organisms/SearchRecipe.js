import React from 'react';
import IngredientSearch from './IngredientSearch';
import CheckBoxGroup from '../molecules/CheckBoxGroup';
import Button from '../atoms/Button';
import RecipeCardList from './RecipeCardList';

const SearchRecipe = props => {

    return (
        <>
            <IngredientSearch 
                state = {props.state}
                content ={props.content.searchIngredients} 
                addItem = {props.addItem}
                deleteItem = {props.deleteItem}
            />

            <CheckBoxGroup 
                state= {props.state}
                text={props.content.searchFoodPreferences.text} 
                options ={props.content.searchFoodPreferences.options}
                onClickCheckBox = {props.onChangeItem}
                type ={props.content.searchFoodPreferences.type}
                checkedBoxes ={props.checkedBoxes}/>
            <CheckBoxGroup 
                state= {props.state}
                text={props.content.searchMeals.text} 
                options ={props.content.searchMeals.options}
                onClickCheckBox = {props.onChangeItem}
                type ={props.content.searchMeals.type}
                checkedBoxes ={props.checkedBoxes}/>
            <div>
                <br />
                <Button 
                text={props.content.searchRecipes.button.text} 
                onClickButton={props.onClickSearchRecipe} />
            </div>

            <br />
            {props.state.searchRecipes.rendered &&  
                <RecipeCardList 
                list = {props.state.searchRecipes.rendered}
                content ={props.content.recipeCard}
                contentFoodDiary = {props.content.foodDiary}
                onChangeItem={props.onChangeItem}
                checkFavoriteRecipe={props.checkFavoriteRecipe}
                onClickIconAddFoodRecipe ={props.onClickIconAddFoodRecipe}
            />}
        </>
    );
};

export default SearchRecipe;