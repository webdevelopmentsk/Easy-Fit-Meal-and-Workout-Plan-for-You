import React from 'react';

import { Context } from '../../context/Provider';


const CaloriesRemain = () => {

    const {state} = React.useContext(Context)

    const remain = state.goalCal - state.foodTotalCal + state.exerciseTotalCal;

    return(
        <>
            <div className ="ui list"> Calories Remaining </div>
            <div className ="content">Goal: {state.goalCal }</div>
            <div className ="content">Food: {state.foodTotalCal }</div>
            <div className ="content">Exercise: {state.exerciseTotalCal }</div>
            <div className ="content">Remaining: {remain }</div>
        </>

    );
}

export default CaloriesRemain;
