import React from 'react';
import IconInfo from '../atoms/IconInfo';
import IconClock from '../atoms/IconClock';
import IconPerson from '../atoms/IconPerson';
import IconBurn from '../atoms/IconBurn';
import IconFavorite from '../atoms/IconFavorite';
import IconClose from '../atoms/IconClose';

const PopUpCardWorkout = props =>{

    const isLiked = props.checkIfFavorite(props.item);

    return(
        
        <div className ="popup">
            <div className ="popup_inner popUpCardItem__container">
                <div className ="popUpCardItem__header">
                <a className="btn btn--black" href= {props.item.url} target="_blank" rel="noopener noreferrer">{props.content.popup.textAddToDiary}</a>
                <a className="btn btn--blush u-m-left-small" href= {props.item.url} target="_blank" rel="noopener noreferrer">{`${props.content.popup.textSeeExercise} ->`}</a>
                    
                    <IconFavorite isLiked = {isLiked} onClickIcon = {props.onChangeItem} item = {props.item} type="favoriteExercises"/>
                    <IconClose onClickIcon = {props.togglePopup} />
                </div>

                <div className ="popUpCardItem__content">
                    <div className ="popUpCardItem__content__image">
                        <iframe className ="popUpCardItem__content__image--content" title="video player" src={props.item.src} frameBorder="0" />
                    </div>

                    <div className="popUpCardItem__content__heading heading heading__m">{props.item.label}</div>

                    <div className ="popUpCardItem__content__info">
                        <div className="popUpCardItem__content__info__item"><IconClock />{`${props.item.totalTime===0? 30: props.item.totalTime}  ${props.content.units.time}`}</div>
                        <div className="popUpCardItem__content__info__item">
                            <IconPerson />{props.item.suitableFor.map((gender,index)=>
                                <span 
                                className ="popUpCardItem__content__info__item--subItem"
                                key={index}>
                                {gender + " "}
                                </span>)}
                            </div>
                        <div className="popUpCardItem__content__info__item"><IconBurn />{`${Math.round(props.item.calories)}  ${props.content.units.calories}`}</div>
                    </div>
                    <div className ="popUpCardItem__content__tag">
                                {props.item.equipment.map((label,index)=> <div className="popUpCardItem__content__tag--item" key={index}><IconInfo /> {label}</div>)}
                                <div className="popUpCardItem__content__tag--item"><IconInfo /> {props.item.level}</div>
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
                                    <iframe className ="popUpCardItem__image--content" title="video player" src={props.item.src} frameBorder="0" />

*/