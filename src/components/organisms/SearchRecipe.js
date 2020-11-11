import React from 'react';
import IngredientSearch from './IngredientSearch';
import CheckBoxFilter from '../molecules/CheckBoxFilter';
import RenderItemCardList from './RenderItemCardList';

const SearchRecipe = props => {

    return (
        <div className = "searchRecipe__container">
            <div className = "searchRecipe__ingredientSearch">
                <IngredientSearch 
                    state = {props.state}
                    content ={props.content.searchIngredients} 
                    addItem = {props.addItem}
                    deleteItem = {props.deleteItem}
                />
            </div>
            <div className = "searchRecipe__checkBoxFilter">
                <CheckBoxFilter 
                    state= {props.state}
                    text={props.content.searchFoodPreferences.text} 
                    options ={props.content.searchFoodPreferences.options}
                    onClickCheckBox = {props.onChangeItem}
                    type ={props.content.searchFoodPreferences.type}
                    checkedBoxes ={props.checkedBoxes}
                    showCheckBoxes = {true}/>
            </div>
            <div className = "searchRecipe__clickSearch"> 
                 <button
                className = "searchRecipe__clickSearch__btn btn btn--black btn--black--m" 
                onClick={props.onClickSearchRecipe}> 
                <span className="searchRecipe__clickSearch__btn__icon__text" >{props.content.searchRecipes.button.text}</span> 
                <i className="search icon searchRecipe__clickSearch__btn__icon"></i> 
                </button>
            </div>


            {props.state.searchRecipes.rendered && 
                <div className = "searchRecipe__renderItemCardList">
                <RenderItemCardList 
                content ={props.content.card}
                contentDiary = {props.content.diary}
                list = {props.state[props.mainState].rendered}
                onChangeItem = {props.onChangeItem}
                checkIfFavorite = {props.checkIfFavorite}
                onAddItemToDiary ={props.onAddFoodRecipe}
                addItem ={props.addItem} />
                </div> 
            }

        </div>
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