import React  from 'react';
import ChooseOptionList from './ChooseOptionList';
import RenderCardList from './RenderCardList';
import CheckBoxGroup from '../molecules/CheckBoxGroup';
const SuggestedPlan = props =>{
    

    return (
    <>
        <ChooseOptionList 
        content = {props.content.plans}
        onClickOption = {props.onSelectPlan}
        />
        {
            props.state[props.mainState].total && 
            <>
                <CheckBoxGroup 
                    state= {props.state}
                    text={props.content.selectSubOptions.text} 
                    options ={props.content.selectSubOptions.options}
                    onClickCheckBox = {props.onChangeItem}
                    type = {props.type}
                    checkedBoxes ={props.checkedBoxes}
                    showCheckBoxes = {props.showCheckBoxes}
                />

                <RenderCardList 
                    content = {props.content.card}
                    contentDiary = {props.content.diary}
                    list = {props.state[props.mainState].rendered}
                    onChangeItem = {props.onChangeItem}
                    checkIfFavorite = {props.checkIfFavorite}
                    onAddItemToDiary ={props.onAddFoodRecipe}
                    addItem ={props.addItem}
                />
            </>

        }
    </>);
}

export default SuggestedPlan;




