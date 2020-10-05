import React from 'react';

const ResultEnergyPerDay = props => {

    return(
        <>
            <br />
            <div style={{border:"solid 1px black",display:"flex", padding: "1rem"}}>
                <img alt ="results" src={props.content.results.image} style={{height:"8rem"}}></img>
                <div>
                <div>{props.content.results.textGoal}{props.state.userGoal.goalType}</div>
                    {
                        props.state.calTrack.weeks !== 0 &&
                        <div>{props.content.results.textEstimatedTime}{props.state.calTrack.weeks}</div>
                        
                    }
                <div>{props.content.results.textCalories}{props.state.calTrack.goalCal}</div>
                </div>
            </div>

        </>
    );
};

export default ResultEnergyPerDay;