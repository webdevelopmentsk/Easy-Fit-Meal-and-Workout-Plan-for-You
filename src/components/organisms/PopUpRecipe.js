import React from 'react';

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

    return(
        <>
        <div className ="popup">
            <div className ="popup_inner">
                <div>
                    <IconFavorite  isLiked = {isLiked} onClickIcon = {props.onChangeItem} item = {props.item} type="favoriteRecipes"/>
                    <IconClose onClickIcon = {props.togglePopup} />
                    <IconAddFood />
                        <ChooseMeal 
                        content ={props.contentFoodDiary.options}
                        item = {props.item}
                        onClickIconAddFoodRecipe ={props.onClickIconAddFoodRecipe}
                        />
                </div>
                <div>
                < Image alt={props.item.label} src={props.item.image} href="#" />
                </div>
                <div className ="content">
                    <div className="header">{props.item.label}</div>
                    <div className="meta">
                    <div><IconClock />{props.item.totalTime===0? 30: props.item.totalTime}<span>  </span>{props.content.units.time}</div>
                    <div><IconPerson />{props.item.yield}<span>  </span>{props.content.units.portion}</div>
                    <div><IconBurn />{Math.round(props.item.calories/props.item.yield)}<span>  </span>{props.content.units.calories}</div>
                    </div>
                </div>
                <div className ="content">
                    <div className="header">{props.content.popup.healthLabels}</div>
                    <div>{props.item.healthLabels.map((item,index)=><span key={index}>{item + " "}</span>)}</div>
                </div>
                <div className ="content">
                    <div className="header">{props.content.popup.ingredients}</div>
                    <IngredientCardList  list = {props.item.ingredients}/>
                </div>
                <div className ="content">
                    <div className="header"><IconSeeLink /><span>  </span>
                    <a href= {props.item.url} target="_blank" rel="noopener noreferrer">{props.content.popup.preparation}</a></div>
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
