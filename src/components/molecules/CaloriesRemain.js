import React from 'react';

import { Context } from '../../context/Provider';


const CaloriesRemain = () => {

    const {state} = React.useContext(Context)

    const remain = state.calTrack.goalCal - state.calTrack.foodTotalCal + state.calTrack.exerciseTotalCal;

    return(
        <div className = "caloriesRemain">
            <div className = "caloriesRemain__heading"> Calories Remaining </div>
            <div className = "caloriesRemain__item">Goal: {state.calTrack.goalCal }</div>
            <div className = "caloriesRemain__item">Food: {state.calTrack.foodTotalCal }</div>
            <div className = "caloriesRemain__item">Exercise: {state.calTrack.exerciseTotalCal }</div>
            <div className = "caloriesRemain__item">Remaining: {remain }</div>
        </div>

    );
}

export default CaloriesRemain;
