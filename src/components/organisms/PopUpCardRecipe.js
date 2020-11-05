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
                <div className ="popup_inner popUpCardRecipe__container">
                    <div className ="popUpCardRecipe__header">
                        <div className ="popUpCardRecipe__header__left">
                            <a className="btn btn--goToCook" href= {props.item.url} target="_blank" rel="noopener noreferrer">{props.content.popup.preparation}</a>
                            <div className= "btn__animation btn__animation">
                                <i className="caret left icon btn__animation btn__animation--arrow"></i>
                            </div>
                        </div>
                        <div className ="popUpCardRecipe__header__right">
                            <IconFavorite isLiked = {isLiked} onClickIcon = {props.onChangeItem} item = {props.item} type="favoriteRecipes"/>
                            <IconClose onClickIcon = {props.togglePopup} />
                        </div>
                    </div>
                    <div className ="popUpCardRecipe__content">
                            <div className ="popUpCardRecipe__content__image">
                            <img className ="popUpCardRecipe__content__image--content" alt={props.item.label} src={props.item.image} href="#" />
                            </div>

                            <div className="popUpCardRecipe__content__heading heading heading__m">{props.item.label}</div>
                            <div className ="popUpCardRecipe__content__info">
                                <div className="popUpCardRecipe__content__info__item"><IconClock />{`${props.item.totalTime===0? 30: props.item.totalTime}  ${props.content.units.time}`}</div>
                                <div className="popUpCardRecipe__content__info__item"><IconPerson />{`${props.item.yield}  ${props.content.units.portion}`}</div>
                                <div className="popUpCardRecipe__content__info__item"><IconBurn />{`${Math.round(props.item.calories/props.item.yield)}  ${props.content.units.calories}`}</div>
                            </div>

                            <div className ="popUpCardRecipe__content__addToMeal">
                                <RenderMealOptionList 
                                content ={props.contentDiary}
                                item = {props.item}
                                addItem ={props.addItem}
                                />
                            </div>
                            <div className ="popUpCardRecipe__content__tag">
                                {props.item.dietLabels.map((label,index)=> 
                                <div className="popUpCardRecipe__content__tag--item" key={index}>{label}</div>)}
                                {props.item.healthLabels.map((label,index)=> 
                                <div className="popUpCardRecipe__content__tag--item" key={index}>{label}</div>)}
                            </div>
                            <div className ="popUpCardRecipe__content__ingred">
                                <div className="popUpCardRecipe__content__ingred__heading">
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
