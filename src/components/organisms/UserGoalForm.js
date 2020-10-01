import React , { useState, useEffect } from 'react'

import Button from '../atoms/Button';

const UserGoalForm = props => {

    const [userGoal, setUserGoal] = useState({
        goalType:'',
        goalWeight:'50',
        goalUnitWeight:'kg',
        goalWeeks: 2,
    },);

    useEffect(()=>{
        //Calculate Reasonable Weeks
        let userWeight = props.state.userPersonalInfo.weight
        let userGoalWeight = userGoal.goalWeight;
        let unit = userGoal.goalUnitWeight;
        let weeks;

        switch (unit){
            case props.content.userPersonalInfo.weight.units.metric: 
                {weeks = Math.round(Math.abs((userGoalWeight-userWeight)))};
            case props.content.userPersonalInfo.weight.units.usStandard:
                {weeks = Math.round(Math.abs((userGoalWeight-userWeight)/2))};
            default: break;
        }
        setUserGoal({...userGoal,goalWeeks:weeks})
    },[userGoal.goalWeight]);


    return(
        <div className ="popup">  
            
            <div className = "popup_inner">
                <h2>{props.content.userGoal.text.heading}</h2>

                <div>{props.content.userGoal.text.goal}
                    <select 
                    className="selection dropdown"
                    onChange ={e => setUserGoal({...userGoal,goalType:e.target.value})}
                    >
                        <option className="text">{props.content.userGoal.options[0].name}</option>
                        <option value={props.content.userGoal.options[1].value}>{props.content.userGoal.options[1].name}</option>
                        <option value={props.content.userGoal.options[2].value}>{props.content.userGoal.options[2].name}</option>
                    </select>
                </div>

                <div>{props.content.userGoal.text.target}
                    <input 
                    type="range"
                    min="30" max="500" 
                    name={props.content.userPersonalInfo.weight.value} 
                    id={props.content.userPersonalInfo.weight.value}
                    value={userGoal.goalWeight}
                    onChange ={e => setUserGoal({...userGoal,goalWeight:e.target.value})}/>
                    <span>{userGoal.goalWeight}</span>
                    
                    <select 
                    className="selection dropdown"
                    onChange = {e => setUserGoal({...userGoal, goalUnitWeight:e.target.value})}
                    >
                        <option className="text">{props.content.userPersonalInfo.weight.units.metric}</option>
                        <option value={props.content.userPersonalInfo.weight.units.usStandard}>{props.content.userPersonalInfo.weight.units.usStandard}</option>
                    </select>

                </div>

                <div>{props.content.userGoal.text.weeks}
                
                    <input 
                    type="range"
                    min="1" max="30" 
                    name={props.content.userGoal.text.weeks} 
                    id={props.content.userGoal.text.weeks}
                    value={userGoal.goalWeeks}
                    onChange ={e => setUserGoal({...userGoal,goalWeeks:e.target.value})}/>
                    <span>{userGoal.goalWeeks}</span>
                    <div>{props.content.userGoal.text.suggestions}</div>
                </div>
            </div>
        </div>
    );
};

export default UserGoalForm;