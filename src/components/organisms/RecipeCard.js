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
            < Image alt={props.item.recipe.label} src={props.item.recipe.image} href="#" onClickImage={togglePopup} />
            <div className ="content">
                <div className="header">{props.item.recipe.label}</div>
                <div className="meta">
                <div><IconClock />{props.item.recipe.totalTime}<span>  </span>{props.content.units.time}</div>
                <div><IconPerson />{props.item.recipe.yield}<span>  </span>{props.content.units.portion}</div>
                <div><IconBurn />{Math.round(props.item.recipe.calories/props.item.recipe.yield)}<span>  </span>{props.content.units.calories}</div>
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
