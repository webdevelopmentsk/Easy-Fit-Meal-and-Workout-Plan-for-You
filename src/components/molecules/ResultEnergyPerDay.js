import React from 'react';

const ResultEnergyPerDay = props => {

    return(
        <>
            <br />
            <span>{props.content.results[props.state.userGoal.goalType].text1}</span>
            <span>{props.state.calTrack.weeks}</span>
            <span>{props.content.results[props.state.userGoal.goalType].text2}</span>
            <span>{props.state.calTrack.goalCal}</span>
            <span>{props.content.results[props.state.userGoal.goalType].text3}</span>
            <br />
        </>
    );
};

export default ResultEnergyPerDay;