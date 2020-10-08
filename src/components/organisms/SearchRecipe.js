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
                content ={props.content.ingredients} 
                addItem = {props.addItem}
                deleteItem = {props.deleteItem}
            />

            <CheckBoxGroup 
                state= {props.state}
                text={props.content.foodPreferences.text} 
                options ={props.content.foodPreferences.options}
                onClickCheckBox = {props.onChangeItem}
                type ={props.content.foodPreferences.type}
                checkedBoxes ={props.checkedBoxes}/>
            <CheckBoxGroup 
                state= {props.state}
                text={props.content.meals.text} 
                options ={props.content.meals.options}
                onClickCheckBox = {props.onChangeItem}
                type ={props.content.meals.type}
                checkedBoxes ={props.checkedBoxes}/>
            <div>
                <br />
                <Button 
                text={props.content.searchRecipe.button.text} 
                onClickButton={props.onClickSearchRecipe} />
            </div>

            <br />
            {props.state.recipes &&  
                <RecipeCardList 
                list = {props.state.recipes}
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