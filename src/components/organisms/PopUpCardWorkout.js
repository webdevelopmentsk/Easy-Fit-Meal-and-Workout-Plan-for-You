import React from 'react';

import IconClock from '../atoms/IconClock';
import IconPerson from '../atoms/IconPerson';
import IconBurn from '../atoms/IconBurn';
import IconFavorite from '../atoms/IconFavorite';
import IconClose from '../atoms/IconClose';
import IconAddItem from '../atoms/IconAddItem';
import IconInfo from '../atoms/IconInfo';
//import ChooseAddToDiary from '../molecules/ChooseAddToDiary';

const PopUpCardWorkout = props =>{

    
    const isLiked = props.checkIfFavorite(props.item);

    return(
        <>
            <div className ="popup">
            <div className ="popup_inner">
            <div>
            <IconFavorite isLiked = {isLiked} onClickIcon = {props.onChangeItem} item = {props.item} type="favoriteExercises"/>
            <IconClose onClickIcon = {props.togglePopup} />
            <IconAddItem text = {props.content.popup.textAddToDiary} item = {props.item} onClickIcon ={props.addItem}/>

            </div>
            <div><iframe title="video player" src={props.item.src} /></div>
            <div className ="content">
            <div className="header">{props.item.label}</div>
            <div className="meta">
            <div><IconClock />{props.item.totalTime}<span> </span>{props.content.units.time}</div>
            <div><IconPerson />{props.item.suitableFor.map((gender,index)=><span key={index}>{gender + " "}</span>)}</div>
            <div><IconBurn />{Math.round(props.item.calories)} <span> </span>{props.content.units.calories}</div>

            <div><IconInfo /> {props.item.equipment}</div>
            <div><IconInfo /> {props.item.level}</div>

            </div>
            </div>
            <div className ="content">
            <div className="header">{props.item.description}</div>
            <div className="header">{props.item.equipment}</div>
            </div>
            </div>
            </div>
        </>
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