import React , { useState } from 'react'
import Button from '../atoms/Button';

const UserGoalForm = props => {

    const [userGoal,setUserGoal] = useState(props.state.userGoal);
    const [open, setOpen] = useState(true);
    const [ranges, setRanges] = useState({
        minWeight: 40,
        maxWeight: props.state.userPersonalInfo.weight,
        unit: 'cm'
    })

    const onGoalChange = e =>{
        setUserGoal({...userGoal,goalType:e.target.value});
        if(e.target.value === props.content.userGoal.options[1].value){
            setOpen(false);
        }
        else{
            setOpen(true);
            if(e.target.value === props.content.userGoal.options[0].value){
                setRanges({...ranges, 
                    minWeight: 40,maxWeight: props.state.userPersonalInfo.weight
                });
            }
            else if(e.target.value === props.content.userGoal.options[2].value){
                setRanges({...ranges, 
                    minWeight: props.state.userPersonalInfo.weight, maxWeight: 200
                });
            }
        }
    }

    return(
        <div className ="popup">  
            
            <div className = "popup_inner inputForm">

                <div className = "inputForm__field">
                    <label className = "inputForm__label">{props.content.userGoal.goal}</label>
                    <select 
                    className="selection dropdown inputForm__select-m"
                    onChange ={e => onGoalChange(e)}
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

            { open &&   
                <div>
                <div className = "inputForm__field">

                    <label className = "inputForm__label">{props.content.userGoal.target}</label>
                    <input 
                    className ="inputForm__input"
                    type="range"
                    min= {ranges.minWeight} max= {ranges.maxWeight}
                    name={props.content.userPersonalInfo.weight.value} 
                    id={props.content.userPersonalInfo.weight.value}
                    value={userGoal.goalWeight}
                    onChange ={e => setUserGoal({...userGoal,goalWeight:e.target.value})}/>
                    <label className = "inputForm__label">{userGoal.goalWeight}</label>
                    
                    <select 
                    className="selection dropdown inputForm__select-s"
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

                    <div className = "inputForm__field" >
                        <label className = "inputForm__label">{props.content.userGoal.intensity.options[0]}</label>
                        <input 
                        className ="inputForm__input"
                        type="range"
                        min="0" max="2" 
                        name={props.content.userGoal.intensity.text} 
                        id={props.content.userGoal.intensity.text}
                        value={userGoal.goalSpeed}
                        onChange ={e => setUserGoal({...userGoal,goalSpeed:e.target.value})}/>
                        <label className = "inputForm__label">{props.content.userGoal.intensity.options[1]}</label>
                    </div>
                </div>
            }
                <div className = "inputForm__field u-center-text" >
                    <Button 
                        className = "btn btn--white"
                        text = {props.content.userGoal.submit.buttonText}
                        onClickButton = {() => props.checkInfoComplete('userGoal',userGoal)}
                    />
                </div>
            </div>
        </div>
    );
};

export default UserGoalForm;
