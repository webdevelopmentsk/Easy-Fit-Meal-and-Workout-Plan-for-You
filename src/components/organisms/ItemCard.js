import React , {useState} from 'react';

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
        <div className = "itemCard__wrapper">
        <div className= "itemCard__container">
            <img className="itemCard__image" 
                alt={props.item.label} src={props.item.image} 
                href="#" onClick={togglePopup} />
            <div className ="itemCard__content ">
                <div className="itemCard__heading">{props.item.label}</div>
                <div className="itemCard__meta">
                <div className="itemCard__meta__tag"><IconClock />{`${props.item.totalTime===0? 30: props.item.totalTime} ${props.content.units.time}`}</div>
                <div className="itemCard__meta__tag"><IconPerson />{`${props.item.yield ? `${props.item.yield}  ${props.content.units.portion}`: props.item.suitableFor.map(gender => `${gender}`) }`}</div>
                <div className="itemCard__meta__tag"><IconBurn />{`${props.item.yield ? Math.round(props.item.calories/props.item.yield): Math.round(props.item.calories)}  ${props.content.units.calories}`}</div>
                
                {
                    props.content.popup.type === 'workout' &&
                    <div className="itemCard__meta__tag__group">
                        {props.item.equipment.map((equipment,index)=> 
                        <div className="itemCard__meta__tag__group--item" key={index}>{equipment}</div>)}
                        <div className="itemCard__meta__tag__group--item"><IconInfo /> {props.item.level}</div>
                    </div>
                }
                {
                    props.content.popup.type === 'recipe' &&

                    <div className="itemCard__meta__tag__group">
                        {props.item.dietLabels.map((label,index)=> 
                        <div className="itemCard__meta__tag__group--item" key={index}>{label}</div>)}
                        {props.item.healthLabels.map((label,index)=> 
                        <div className="itemCard__meta__tag__group--item" key={index}>{label}</div>)}
                    </div>
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
        
    
        </div>
    );
}

export default ItemCard;
