import React , {useState} from 'react';

import Image from '../atoms/Image';

import IconClock from '../atoms/IconClock';
import IconPerson from '../atoms/IconPerson';
import IconBurn from '../atoms/IconBurn';
import IconInfo from '../atoms/IconInfo';

import PopUpCardRecipe from './PopUpCardRecipe';
import PopUpCardWorkout from './PopUpCardWorkout';

const ItemCard = props =>{

    const [showPopUp,setShowPopUp] = useState(false);

    const togglePopup = () => {
        setShowPopUp(!showPopUp);
    }

    return(
        <>
        <div className= "ui card">
            < Image alt={props.item.label} src={props.item.image} href="#" onClickImage={togglePopup} />
            <div className ="content">
                <div className="header">{props.item.label}</div>
                <div className="meta">
                <div><IconClock />{props.item.totalTime===0? 30: props.item.totalTime}<span>  </span>{props.content.units.time}</div>
                <div><IconPerson />{props.item.yield ? props.item.yield : props.item.suitableFor.map(gender => gender + " ") }
                                    <span>  </span>{props.content.units.portion}</div>
                <div><IconBurn />{props.item.yield ? Math.round(props.item.calories/props.item.yield): Math.round(props.item.calories)}<span>  </span>{props.content.units.calories}</div>
                {
                    props.content.popup.type === 'workout' &&
                    <>
                    <div><IconInfo /> {props.item.equipment}</div>
                    <div><IconInfo /> {props.item.level}</div>
                    </>
                }
                {
                    props.content.popup.type === 'recipe' &&
                    <>
                    <div><IconInfo /> {props.item.dietLabels.map(label=>`${label}, `)}</div>
                    <div><IconInfo /> {props.item.healthLabels.map(label=>`${label}, `)}</div>
                    </>
                }
                </div>
            </div>
        </div>
        {showPopUp ? 
            props.content.popup.type === 'recipe' ?
            < PopUpCardRecipe
            update = {showPopUp}
            item ={props.item}
            content = {props.content}
            contentDiary = {props.contentDiary}
            togglePopup ={togglePopup}
            onChangeItem ={props.onChangeItem}
            checkIfFavorite = {props.checkIfFavorite}
            addItem ={props.addItem}
            />
            :< PopUpCardWorkout
            update = {showPopUp}
            item ={props.item}
            content = {props.content}
            contentDiary = {props.contentDiary}
            togglePopup ={togglePopup}
            onChangeItem ={props.onChangeItem}
            checkIfFavorite = {props.checkIfFavorite}
            addItem ={props.addItem}
            />
        :null}
        
    
        </>
    );
}

export default ItemCard;
