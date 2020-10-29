import React from 'react';

import IconClock from '../atoms/IconClock';
import IconPerson from '../atoms/IconPerson';
import IconBurn from '../atoms/IconBurn';
import IconFavorite from '../atoms/IconFavorite';
import IconClose from '../atoms/IconClose';
import IconAddItem from '../atoms/IconAddItem';

const PopUpCardWorkout = props =>{

    const isLiked = props.checkIfFavorite(props.item);

    return(
        
        <div className ="popup">
            <div className ="popup_inner popUpCardWorkout__container">
                <div className ="popUpCardWorkout__header">
                        <IconFavorite isLiked = {isLiked} onClickIcon = {props.onChangeItem} item = {props.item} type="favoriteExercises"/>
                        <IconClose onClickIcon = {props.togglePopup} />
                </div>
                <div className ="popUpCardWorkout__content">
                    <div className ="popUpCardWorkout__content__video">
                        <iframe className ="popUpCardWorkout__video--content" title="video player" src={props.item.src} />
                    </div>
                    <div className ="popUpCardWorkout__content__main">
                        <div className="popUpCardWorkout__content__main__heading heading heading__m">{props.item.label}</div>
                    </div>
                    <div className ="popUpCardWorkout__content__addToExercise">
                        <button 
                            className="popUpCardWorkout__content__addToExercise__btn btn btn--addToDiary"
                            onClick={ () => props.addItem(props.item,props.item.type)}
                            >
                            <IconAddItem />
                            {props.content.popup.textAddToDiary}
                        </button>
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