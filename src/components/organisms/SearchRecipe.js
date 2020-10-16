import React from 'react';
import IngredientSearch from './IngredientSearch';
import CheckBoxGroup from '../molecules/CheckBoxGroup';
import Button from '../atoms/Button';
import RenderCardList from './RenderCardList';

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
                checkedBoxes ={props.checkedBoxes}
                showCheckBoxes = {true}/>
            <div>
                <br />
                <Button 
                text={props.content.searchRecipes.button.text} 
                onClickButton={props.onClickSearchRecipe} />
            </div>

            <br />
            {props.state.searchRecipes.rendered &&  
                <RenderCardList 
                content ={props.content.card}
                contentDiary = {props.content.diary}
                list = {props.state[props.mainState].rendered}
                onChangeItem = {props.onChangeItem}
                checkIfFavorite = {props.checkIfFavorite}
                onAddItemToDiary ={props.onAddFoodRecipe}
                addItem ={props.addItem}

            />}

        </>
    );
};

export default SearchRecipe;

/*
Checkboxes for meals 
            <CheckBoxGroup 
                state= {props.state}
                text={props.content.selectSubOptions.text} 
                options ={props.content.selectSubOptions.options}
                onClickCheckBox = {props.onChangeItem}
                type ={props.content.selectSubOptions.type}
                checkedBoxes ={props.checkedBoxes}
                showCheckBoxes = {true}
                />
*/