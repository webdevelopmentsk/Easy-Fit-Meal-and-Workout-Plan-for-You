import React from 'react';
import IconClock from '../atoms/IconClock';
import IconPerson from '../atoms/IconPerson';
import IconBurn from '../atoms/IconBurn';
import IconFavorite from '../atoms/IconFavorite';
import IconClose from '../atoms/IconClose';

import RenderRecipeIngredientList from './RenderRecipeIngredientList';
import RenderMealOptionList from '../molecules/RenderMealOptionList';

const PopUpCardRecipe = props =>{
    
    const isLiked = props.checkIfFavorite(props.item);

    return(
            <div className ="popup">
                <div className ="popup_inner popUpCardItem__container">
                    <div className ="popUpCardItem__header">
                        <a className="btn btn--blush" href= {props.item.url} target="_blank" rel="noopener noreferrer">{`${props.content.popup.preparation} ->`}</a>
                        <IconFavorite isLiked = {isLiked} onClickIcon = {props.onChangeItem} item = {props.item} type="favoriteRecipes"/>
                        <IconClose onClickIcon = {props.togglePopup} />
                    </div>
                    <div className ="popUpCardItem__content">
                            <div className ="popUpCardItem__content__image">
                            <img className ="popUpCardItem__content__image--content" alt={props.item.label} src={props.item.image} href="#" />
                            </div>

                            <div className="popUpCardItem__content__heading heading heading__m">{props.item.label}</div>
                            <div className ="popUpCardItem__content__info">
                                <div className="popUpCardItem__content__info__item"><IconClock />{`${props.item.totalTime===0? 30: props.item.totalTime}  ${props.content.units.time}`}</div>
                                <div className="popUpCardItem__content__info__item"><IconPerson />{`${props.item.yield}  ${props.content.units.portion}`}</div>
                                <div className="popUpCardItem__content__info__item"><IconBurn />{`${Math.round(props.item.calories/props.item.yield)}  ${props.content.units.calories}`}</div>
                            </div>

                            <div className ="popUpCardItem__content__addToDiary">
                                <RenderMealOptionList 
                                content ={props.contentDiary}
                                item = {props.item}
                                addItem ={props.addItem}
                                />
                            </div>
                            <div className ="popUpCardItem__content__tag">
                                {props.item.dietLabels.map((label,index)=> 
                                <div className="popUpCardItem__content__tag--item" key={index}>{label}</div>)}
                                {props.item.healthLabels.map((label,index)=> 
                                <div className="popUpCardItem__content__tag--item" key={index}>{label}</div>)}
                            </div>
                            <div className ="popUpCardItem__content__ingred">
                                <div className="popUpCardItem__content__ingred__heading">
                                {`${props.content.popup.ingredients} `}<i className="caret square down icon"></i>
                                </div>
                                <RenderRecipeIngredientList list = {props.item.ingredients}/>
                            </div>
            
                    </div>
                </div>
            </div>
    );

}

export default PopUpCardRecipe;
