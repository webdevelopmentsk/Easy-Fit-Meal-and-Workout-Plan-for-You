import React from 'react';

const RenderDailyCarlorieNeed = props => {

    return(

        <div className = 'renderDailyCarlorieNeed--container'>
            <div className="renderDailyCarlorieNeed--subContainer">
                {props.content.results.textGoal} 
                <div className="renderDailyCarlorieNeed--text">{props.state.userGoal.goalType}
                <div className="renderDailyCarlorieNeed--text--underline"></div>
                </div>
            </div>
            
                {
                    props.state.calTrack.weeks !== 0 &&
                    <div className="renderDailyCarlorieNeed--subContainer">
                        {props.content.results.textEstimatedTime}  
                        <div className="renderDailyCarlorieNeed--text">{`${props.state.calTrack.weeks}  ${props.content.results.timeUnit}`}
                        <div className="renderDailyCarlorieNeed--text--underline"></div>
                        </div>
                    </div>
                    
                }
            <div className="renderDailyCarlorieNeed--subContainer">
                {props.content.results.textCalories}
                <div className="renderDailyCarlorieNeed--text">{`${props.state.calTrack.goalCal}  ${props.content.results.energyUnit}`}
                <div className="renderDailyCarlorieNeed--text--underline"></div>
                </div>
            </div>
        </div>
    );
};

export default RenderDailyCarlorieNeed;