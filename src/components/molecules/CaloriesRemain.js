import React from 'react';

import { Context } from '../../context/Provider';


const CaloriesRemain = () => {

    const {state} = React.useContext(Context)

    const remain = state.calTrack.goalCal - state.calTrack.foodTotalCal + state.calTrack.exerciseTotalCal;

    return(
        <>
            <div className ="ui list"> Calories Remaining </div>
            <div className ="content">Goal: {state.calTrack.goalCal }</div>
            <div className ="content">Food: {state.calTrack.foodTotalCal }</div>
            <div className ="content">Exercise: {state.calTrack.exerciseTotalCal }</div>
            <div className ="content">Remaining: {remain }</div>
        </>

    );
}

export default CaloriesRemain;
