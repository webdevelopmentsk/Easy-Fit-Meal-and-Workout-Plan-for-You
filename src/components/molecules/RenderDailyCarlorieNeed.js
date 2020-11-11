import React from 'react';

const RenderDailyCarlorieNeed = props => {

    return(

        <div className = 'renderDailyCarlorieNeed__container'>

            <div className="renderDailyCarlorieNeed__subContainer">
                <div className="renderDailyCarlorieNeed__topic">{props.content.results.textGoal}</div>
                <div className="renderDailyCarlorieNeed__text">{props.state.userGoal.goalType}
                <div className="renderDailyCarlorieNeed__text--underline"></div>
                </div>
            </div>
            
            <div className="renderDailyCarlorieNeed__subContainer">
                    <div className="renderDailyCarlorieNeed__topic">{props.content.results.textCurrentWeight}</div>
                    <div className="renderDailyCarlorieNeed__text">{`${props.state.userPersonalInfo.weight}  ${props.state.userPersonalInfo.unitWeight}`}
                    <div className="renderDailyCarlorieNeed__text--underline"></div>
                    </div>
            </div>
                {
                    props.state.calTrack.weeks !== 0 &&
                    <>
                    <div className="renderDailyCarlorieNeed__subContainer">
                    <div className="renderDailyCarlorieNeed__topic">{props.content.results.textEstimatedTime} </div>
                    <div className="renderDailyCarlorieNeed__text">{`${props.state.calTrack.weeks}  ${props.content.results.timeUnit}`}
                    <div className="renderDailyCarlorieNeed__text--underline"></div>
                    </div>
                    </div>

                    <div className="renderDailyCarlorieNeed__subContainer">
                    <div className="renderDailyCarlorieNeed__topic">{props.content.results.textTargetWeight}</div>
                    <div className="renderDailyCarlorieNeed__text">{`${props.state.userGoal.goalWeight}  ${props.state.userGoal.goalUnitWeight}`}
                    <div className="renderDailyCarlorieNeed__text--underline"></div>
                    </div>
                    </div>
                    </>
                }
            <div className="renderDailyCarlorieNeed__subContainer">
                <div className="renderDailyCarlorieNeed__topic">{props.content.results.textCalories}</div>
                <div className="renderDailyCarlorieNeed__text">{`${props.state.calTrack.goalCal}  ${props.content.results.energyUnit}`}
                <div className="renderDailyCarlorieNeed__text--underline"></div>
                </div>
            </div>
        </div>
    );
};

export default RenderDailyCarlorieNeed;