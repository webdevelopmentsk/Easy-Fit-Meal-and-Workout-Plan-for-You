import React from 'react';

import IconClock from '../atoms/IconClock';
import IconPerson from '../atoms/IconPerson';
import IconBurn from '../atoms/IconBurn';
import IconFavorite from '../atoms/IconFavorite';
import IconClose from '../atoms/IconClose';
import IconSeeLink from '../atoms/IconSeeLink';
import IconAddItem from '../atoms/IconAddItem';
import Image from '../atoms/Image'
import IconInfo from '../atoms/IconInfo';

import IngredientCardList from './IngredientCardList';
import ChooseAddToDiary from '../molecules/ChooseAddToDiary';

const PopUpCardRecipe = props =>{
    
    const isLiked = props.checkIfFavorite(props.item);

    return(
        <>
            <div className ="popup">
            <div className ="popup_inner">
            <div>
            <IconFavorite isLiked = {isLiked} onClickIcon = {props.onChangeItem} item = {props.item} type="favoriteRecipes"/>
            <IconClose onClickIcon = {props.togglePopup} />
            <IconAddItem />
            <ChooseAddToDiary 
            content ={props.contentDiary.options}
            item = {props.item}
            addItem ={props.addItem}
            />
            </div>
            <div>
            < Image alt={props.item.label} src={props.item.image} href="#" />
            </div>
            <div className ="content">
            <div className="header">{props.item.label}</div>
            <div className="meta">
            <div><IconClock />{props.item.totalTime===0? 30: props.item.totalTime}<span> </span>{props.content.units.time}</div>
            <div><IconPerson />{props.item.yield}<span> </span>{props.content.units.portion}</div>
            <div><IconBurn />{Math.round(props.item.calories/props.item.yield)}<span> </span>{props.content.units.calories}</div>
            <div><IconInfo /> {props.item.dietLabels.map(label=>`${label}, `)}</div>
            <div><IconInfo /> {props.item.healthLabels.map(label=>`${label}, `)}</div>
            
            </div>
            </div>
            <div className ="content">
            <div className="header">{props.content.popup.healthLabels}</div>
            </div>
            <div className ="content">
            <div className="header">{props.content.popup.ingredients}</div>
            <IngredientCardList list = {props.item.ingredients}/>
            </div>
            <div className ="content">
            <div className="header"><IconSeeLink /><span> </span>
            <a href= {props.item.url} target="_blank" rel="noopener noreferrer">{props.content.popup.preparation}</a></div>
            </div>
            </div>
            </div>
        </>
    );

}

export default PopUpCardRecipe;
