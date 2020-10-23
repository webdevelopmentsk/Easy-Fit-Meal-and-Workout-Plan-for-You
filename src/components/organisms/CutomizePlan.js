import React  from 'react';
import RenderPlanCardList from './RenderPlanCardList';
import RenderItemCardList from './RenderItemCardList';
import CheckBoxFilter from '../molecules/CheckBoxFilter';
const CutomizePlan = props =>{
    

    return (
    <div className="suggestedPlan__container">
        <RenderPlanCardList 
        content = {props.content.plans}
        onClickOption = {props.onSelectPlan}
        />
        {
            props.state[props.mainState].total && 
            <>
                <CheckBoxFilter 
                    state= {props.state}
                    text={props.content.selectSubOptions.text} 
                    options ={props.content.selectSubOptions.options}
                    onClickCheckBox = {props.onChangeItem}
                    type = {props.type}
                    checkedBoxes ={props.checkedBoxes}
                    showCheckBoxes = {props.showCheckBoxes}
                />

                <RenderItemCardList 
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
    </div>);
}

export default CutomizePlan;




