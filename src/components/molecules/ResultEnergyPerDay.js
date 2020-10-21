import React from 'react';

const ResultEnergyPerDay = props => {

    return(

        <div className = 'resultForm'>
            <div className="resultForm__goal">
                {props.content.results.textGoal} 
                <div className="resultForm__text">{props.state.userGoal.goalType}</div>
            </div>
            
                {
                    props.state.calTrack.weeks !== 0 &&
                    <div className="resultForm__time">
                        {props.content.results.textEstimatedTime}  
                        <div className="resultForm__text">{`${props.state.calTrack.weeks}  ${props.content.results.timeUnit}`}</div>
                    </div>
                    
                }
            <div className="resultForm__energy">{props.content.results.textCalories}
                <div className="resultForm__text">{`${props.state.calTrack.goalCal}  ${props.content.results.energyUnit}`}</div>
            </div>
        </div>
    );
};

export default ResultEnergyPerDay;