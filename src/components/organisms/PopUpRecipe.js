import React , { useState }from 'react';

import IconClock from '../atoms/IconClock';
import IconPerson from '../atoms/IconPerson';
import IconBurn from '../atoms/IconBurn';
import IconFavorite from '../atoms/IconFavorite';
import IconClose from '../atoms/IconClose';
import IconSeeLink from '../atoms/IconSeeLink';
import IconAddFood from '../atoms/IconAddFood';
import Image from '../atoms/Image'


import IngredientCardList from './IngredientCardList';
import ChooseMeal from '../molecules/ChooseMeal';

const PopUpRecipe = props =>{

    const isLiked = props.checkFavoriteRecipe(props.item);

    const [showChooseMeal,setChooseMeal] = useState(true);

    const toggleChooseMeal = () => {
        setChooseMeal(!showChooseMeal);
    }

    return(
        <>
        <div className ="popup">
            <div className ="popup_inner">
                <div>
                    <IconFavorite  isLiked = {isLiked} onClickIcon = {props.onChangeItem} item = {props.item} type="favoriteRecipes"/>
                    <IconClose onClickIcon = {props.togglePopup} />
                    <IconAddFood />
                        {showChooseMeal && 
                        <ChooseMeal 
                        content ={props.contentFoodDiary.options}
                        item = {props.item}
                        onClickIconAddFoodRecipe ={props.onClickIconAddFoodRecipe}
                        />}
                </div>
                <div>
                < Image alt={props.item.recipe.label} src={props.item.recipe.image} href="#" />
                </div>
                <div className ="content">
                    <div className="header">{props.item.recipe.label}</div>
                    <div className="meta">
                    <div><IconClock />{props.item.recipe.totalTime}<span>  </span>{props.content.units.time}</div>
                    <div><IconPerson />{props.item.recipe.yield}<span>  </span>{props.content.units.portion}</div>
                    <div><IconBurn />{Math.round(props.item.recipe.calories/props.item.recipe.yield)}<span>  </span>{props.content.units.calories}</div>
                    </div>
                </div>
                <div className ="content">
                    <div className="header">{props.content.popup.healthLabels}</div>
                    <div>{props.item.recipe.healthLabels.map((item,index)=><span key={index}>{item + " "}</span>)}</div>
                </div>
                <div className ="content">
                    <div className="header">{props.content.popup.ingredients}</div>
                    <IngredientCardList  list = {props.item.recipe.ingredients}/>
                </div>
                <div className ="content">
                    <div className="header"><IconSeeLink /><span>  </span>
                    <a href= {props.item.recipe.url} target="_blank">{props.content.popup.preparation}</a></div>
                </div>
            </div>
        </div>
        </>
    );

}

export default PopUpRecipe;

/*
{showChooseMeal && 
    <ChooseMeal 
    content ={props.contentFoodDiary.options}
    item = {props.item}
    />}
*/
