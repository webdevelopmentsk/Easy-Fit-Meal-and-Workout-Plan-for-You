import React from 'react';
import PlanCard from '../molecules/PlanCard';

const RenderPlanCardList = props => {

    const {content,onClickOption} = props
    return(
        <div className ="chooseOptionList__container">
                <div className= "heading heading__h3">{content.text}</div>
                <div className ="chooseOptionList__item">
                {
                    content.options.map((option,index) => 
                    <PlanCard key ={index} 
                    type = {content.type}
                    option = {option}
                    onClickOption ={onClickOption} />)
                }
                </div>
        </div>
    );
};

export default RenderPlanCardList;