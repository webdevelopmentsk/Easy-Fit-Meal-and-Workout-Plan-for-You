import React , { useState } from 'react'

const UserGoalForm = props => {
    const content = props.content.selectGoal;

    const [goal, setGoal] = useState({
        type:'',
        goalWeight:'',
        goalUnitWeight:'',
        goalWeeks:'',
    },);

    return(
        <>  
            <h2>{props.content.selectGoal.text.heading}</h2>
            <div>
                
                <div>{props.content.selectGoal.text.goal}
                    <select 
                    className="selection dropdown"
                    onChange ={e => setGoal({...goal,type:e.target.value})}
                    >
                        <option className="text">{props.content.selectGoal.options[0].name}</option>
                        <option value={props.content.selectGoal.options[1].value}>{props.content.selectGoal.options[1].name}</option>
                        <option value={props.content.selectGoal.options[2].value}>{props.content.selectGoal.options[2].name}</option>
                    </select>
                </div>

                <div>{props.content.selectGoal.text.target}
                    <input 
                    type="range"
                    min="30" max="500" 
                    name={props.content.userDetail.weight.value} 
                    id={props.content.userDetail.weight.value}
                    value={goal.goalWeight}
                    onChange ={e => setGoal({...goal,goalWeight:e.target.value})}/>
                    <span>{goal.goalWeight}</span>
                    
                    <select 
                    className="selection dropdown"
                    onChange = {e => setGoal({...goal, goalUnitWeight:e.target.value})}
                    >
                        <option className="text">{props.content.userDetail.weight.units.metric}</option>
                        <option value={props.content.userDetail.weight.units.usStandard}>{props.content.userDetail.weight.units.usStandard}</option>
                    </select>

                </div>


            </div>
        </>
    );
};

export default UserGoalForm;