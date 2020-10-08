import React , {useState} from 'react';

import Image from '../atoms/Image';

import IconClock from '../atoms/IconClock';
import IconPerson from '../atoms/IconPerson';
import IconBurn from '../atoms/IconBurn';


import PopUpRecipe from './PopUpRecipe';

const RecipeCard = props =>{

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
                <div><IconPerson />{props.item.yield}<span>  </span>{props.content.units.portion}</div>
                <div><IconBurn />{Math.round(props.item.calories/props.item.yield)}<span>  </span>{props.content.units.calories}</div>
                </div>
            </div>
        </div>
        {showPopUp && < PopUpRecipe
                        update = {showPopUp}
                        item ={props.item}
                        content = {props.content}
                        contentFoodDiary = {props.contentFoodDiary}
                        togglePopup ={togglePopup}
                        onChangeItem ={props.onChangeItem}
                        checkFavoriteRecipe = {props.checkFavoriteRecipe}
                        onClickIconAddFoodRecipe ={props.onClickIconAddFoodRecipe}
                        />}
        </>
    );
}

export default RecipeCard;
