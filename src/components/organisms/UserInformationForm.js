import React, { useState } from 'react';

import Button from '../atoms/Button';

const UserInformationForm = props =>{

    const content = props.content.userPersonalInfo;
    const [userPersonalInfo,setUserPersonalInfo] = 
    useState({
        age: 0,
        gender: 'male',
        height:0,
        weight:0,
        activity: 'Light: exercise 1-3 times/week',
        unitHeight:'cm',
        unitWeight:'kg',
    });
    
    return(
        <div className ="popup">
            <div className="ui action input popup_inner" style={{display:"flex",flexWrap:"wrap",flexDirection:"column"}}>

                <h2>{content.text}</h2>
                <div>
                    <label htmlFor={content.age.value}>{content.age.name}</label>
                    <input 
                    type="range"
                    min="15" max="90" 
                    name={content.age.value} 
                    id={content.age.value}
                    value={userPersonalInfo.age}
                    onChange ={e => setUserPersonalInfo({...userPersonalInfo,[content.age.value]:e.target.value})}/>
                    <span>{userPersonalInfo.age}</span>
                </div>

                <div>
                    <label htmlFor={content.weight.value}>{content.weight.name}</label>
                    <input 
                    type="range"
                    min="30" max="500" 
                    name={content.weight.value} 
                    id={content.weight.value}
                    value={userPersonalInfo.weight}
                    onChange ={e => setUserPersonalInfo({...userPersonalInfo,[content.weight.value]:e.target.value})}/>
                    <span>{userPersonalInfo.weight}</span>
                    
                    <select 
                    className="selection dropdown"
                    onChange = {e => setUserPersonalInfo({...userPersonalInfo, unitWeight:e.target.value})}
                    >
                        <option className="text">{content.weight.units.metric}</option>
                        <option value={content.weight.units.usStandard}>{content.weight.units.usStandard}</option>
                    </select>

                </div>

                <div>
                    <label htmlFor={content.height.value}>{content.height.name}</label>
                    <input 
                    type="range"
                    min="30" max="500" 
                    name={content.height.value} 
                    id={content.height.value}
                    value={userPersonalInfo.height}
                    onChange ={e => setUserPersonalInfo({...userPersonalInfo,[content.height.value]:e.target.value})}/>
                    <span>{userPersonalInfo.height}</span>
                    
                    <select 
                    className="selection dropdown"
                    onChange = {e => setUserPersonalInfo({...userPersonalInfo, unitHeight:e.target.value})}
                    >
                        <option className="text">{content.height.units.metric}</option>
                        <option value={content.height.units.usStandard}>{content.height.units.usStandard}</option>
                    </select>

                </div>

                <div>
                    <label htmlFor={content.gender.value}>{content.gender.name}</label>
                    <select 
                    className="selection dropdown"
                    onChange = {e => setUserPersonalInfo({...userPersonalInfo,[content.gender.value]:e.target.value})}
                    >
                        <option className="text">{content.gender.options.male.value}</option>
                        <option value={content.gender.options.female.value}>{content.gender.options.female.value}</option>
                    </select>
                </div>

                <div>
                    <label htmlFor={content.activity.value}>{content.activity.name}</label>
                    <select 
                    className="selection dropdown"
                    onChange = {e => setUserPersonalInfo({...userPersonalInfo,[content.activity.value]:e.target.value})}
                    >
                        <option className="text">{content.activity.options[0]}</option>
                        <option value={content.activity.options[1]}>{content.activity.options[1]}</option>
                        <option value={content.activity.options[2]}>{content.activity.options[2]}</option>
                        <option value={content.activity.options[3]}>{content.activity.options[3]}</option>
                    </select>
                </div>
                
                <Button text = {content.submit.buttonText} onClickButton = {() => props.checkInfoComplete('userPersonalInfo',userPersonalInfo)}/>
            </div>
        </div>
    );
};

export default UserInformationForm;