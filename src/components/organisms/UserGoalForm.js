import React , { useState } from 'react'

import Button from '../atoms/Button';

const UserGoalForm = props => {

    const [userGoal,setUserGoal] = useState(props.state.userGoal);

    return(
        <div className ="popup">  
            
            <div className = "popup_inner">
                <h2>{props.content.userGoal.text.heading}</h2>

                <div>{props.content.userGoal.text.goal}
                    <select 
                    className="selection dropdown"
                    onChange ={e => setUserGoal({...userGoal,goalType:e.target.value})}
                    >
                        <option className="text">{props.content.userGoal.options.map(option => option.value === userGoal.goalType ? option.name: null)}
                        </option>
                        {
                            props.content.userGoal.options.map((option,index) => {
                                if(option.value !== userGoal.goalType){
                                   return <option key ={index} value={option.value}>{option.name}</option>
                                }
                                else return null
                            })
                        }
                    </select>
                </div>

                <div>{props.content.userGoal.text.target}
                    <input 
                    type="range"
                    min="30" max="200" 
                    name={props.content.userPersonalInfo.weight.value} 
                    id={props.content.userPersonalInfo.weight.value}
                    value={userGoal.goalWeight}
                    onChange ={e => setUserGoal({...userGoal,goalWeight:e.target.value})}/>
                    <span>{userGoal.goalWeight}</span>
                    
                    <select 
                    className="selection dropdown"
                    onChange = {e => setUserGoal({...userGoal, goalUnitWeight:e.target.value})}
                    >
                        <option className="text">{userGoal.goalUnitWeight}
                        </option>
                        {
                            props.content.userPersonalInfo.weight.units.map((option,index) => {
                                if(option !== userGoal.goalUnitWeight){
                                   return <option key ={index} value={option}>{option}</option>
                                }
                                return null
                            })
                        }
                    </select>

                </div>

                <div>
                    <span>{props.content.userGoal.text.intensity.options[0]}</span>
                    <input 
                    type="range"
                    min="0" max="2" 
                    name={props.content.userGoal.text.intensity.text} 
                    id={props.content.userGoal.text.intensity.text}
                    value={userGoal.goalSpeed}
                    onChange ={e => setUserGoal({...userGoal,goalSpeed:e.target.value})}/>
                    <span>{props.content.userGoal.text.intensity.options[1]}</span>
                    
                </div>
                
                <Button 
                    text = {props.content.userGoal.submit.buttonText}
                    onClickButton = {() => props.checkInfoComplete('userGoal',userGoal)}
                />
            </div>
        </div>
    );
};

export default UserGoalForm;

/*
const onChangeTargetWeight = () =>{
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
};
*/