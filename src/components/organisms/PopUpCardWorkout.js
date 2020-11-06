import React from 'react';

import IconClock from '../atoms/IconClock';
import IconPerson from '../atoms/IconPerson';
import IconBurn from '../atoms/IconBurn';
import IconFavorite from '../atoms/IconFavorite';
import IconClose from '../atoms/IconClose';

const PopUpCardWorkout = props =>{

    const isLiked = props.checkIfFavorite(props.item);

    return(
        
        <div className ="popup">
            <div className ="popup_inner popUpCardWorkout__container">
                <div className ="popUpCardWorkout__header">
                    <div className ="popUpCardWorkout__header__left">
                        <button 
                            className="btn btn--addToDiary"
                            onClick={ () => props.addItem(props.item,props.item.type)}
                            >
                            {props.content.popup.textAddToDiary}
                        </button>
                        <div className= "btn__animation btn__animation">
                            <i className="caret left icon btn__animation btn__animation--arrow"></i>
                        </div>
                    </div>
                    <div className ="popUpCardRecipe__header__right">
                    <IconFavorite isLiked = {isLiked} onClickIcon = {props.onChangeItem} item = {props.item} type="favoriteExercises"/>
                    <IconClose onClickIcon = {props.togglePopup} />
                    </div>
                </div>

                <div className ="popUpCardWorkout__content">
                    <div className ="popUpCardWorkout__content__video">
                        <iframe className ="popUpCardWorkout__video--content" title="video player" src={props.item.src} frameBorder="0" />
                    </div>
                    <div className ="popUpCardWorkout__content__main">
                        <div className="popUpCardWorkout__content__main__heading heading heading__m">{props.item.label}</div>
                    </div>
                    <div className ="popUpCardWorkout__content__info">
                        <div className="popUpCardWorkout__content__info__item"><IconClock />{`${props.item.totalTime===0? 30: props.item.totalTime}  ${props.content.units.time}`}</div>
                        <div className="popUpCardWorkout__content__info__item">
                            <IconPerson />{props.item.suitableFor.map((gender,index)=>
                                <span 
                                className ="popUpCardWorkout__content__info__item--item"
                                key={index}>
                                {gender + " "}
                                </span>)}
                            </div>
                        <div className="popUpCardWorkout__content__info__item"><IconBurn />{`${Math.round(props.item.calories)}  ${props.content.units.calories}`}</div>
                    </div>
                    <div className ="popUpCardWorkout__content__tag">
                                {props.item.equipment.map((label,index)=> <div className="popUpCardWorkout__content__tag--item" key={index}>{label}</div>)}
                                <div className="popUpCardWorkout__content__tag--item">{props.item.level}</div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default PopUpCardWorkout;

/*
            <ChooseAddToDiary 
            content ={props.contentDiary.options}
            item = {props.item}
            addItem ={props.addItem}
            />
*/