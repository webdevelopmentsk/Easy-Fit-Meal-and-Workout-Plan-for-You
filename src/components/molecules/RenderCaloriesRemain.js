import React from 'react';

import { content } from '../../data/content';
import { Context } from '../../context/Provider';


const RenderCaloriesRemain = () => {

    const {state} = React.useContext(Context);
    const content_caloriesRemain = content.caloriesRemain;

    const remain = state.calTrack.goalCal - state.calTrack.foodTotalCal + state.calTrack.exerciseTotalCal;

    return(
        <div className = "renderCaloriesRemain__container">
             <div className = "renderCaloriesRemain__heading">
               <h3 className="heading__text heading heading__s">
                    {content_caloriesRemain.heading} 
                <div className="heading__text__underline" ></div>
                </h3>
               
             </div>
            <div className = "renderCaloriesRemain__item">
                 <span className = "renderCaloriesRemain__item__name">{content_caloriesRemain.text1}</span>
                 <span className = "renderCaloriesRemain__item__text">{state.calTrack.goalCal }</span>
            </div>
            <div className = "renderCaloriesRemain__item">
                 <span className = "renderCaloriesRemain__item__name">{content_caloriesRemain.text2}</span>
                 <span className = "renderCaloriesRemain__item__text">{state.calTrack.foodTotalCal }</span>
            </div>
            <div className = "renderCaloriesRemain__item">
                 <span className = "renderCaloriesRemain__item__name">{content_caloriesRemain.text3}</span>
                 <span className = "renderCaloriesRemain__item__text">{state.calTrack.exerciseTotalCal}</span>
            </div>
            <div className = "renderCaloriesRemain__item">
                 <span className = "renderCaloriesRemain__item__name">{content_caloriesRemain.text4}</span>
                 <span className = "renderCaloriesRemain__item__text">{remain}</span>

            </div>

        </div>

    );
}

export default RenderCaloriesRemain;

