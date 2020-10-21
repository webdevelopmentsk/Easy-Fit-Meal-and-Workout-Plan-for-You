import React, { useState } from 'react';

import Button from '../atoms/Button';

const UserInformationForm = props =>{

    const content = props.content.userPersonalInfo;
    const [userPersonalInfo,setUserPersonalInfo] = 
    useState(props.state.userPersonalInfo);
    
    return(
        <div className ="popup">
            <div className="ui action input popup_inner">
                <div className = "inputForm__field">
                    <label className = "inputForm__label" htmlFor={content.age.value}>{content.age.name}</label>
                    <input
                    className = "popup__input" 
                    type="range"
                    min="15" max="50" 
                    name={content.age.value} 
                    id={content.age.value}
                    value={userPersonalInfo.age}
                    onChange ={e => setUserPersonalInfo({...userPersonalInfo,[content.age.value]:e.target.value})}/>
                    <label className = "inputForm__label">{userPersonalInfo.age}</label>
                </div>

                <div className = "inputForm__field">
                    <label className = "inputForm__label" htmlFor={content.weight.value}>{content.weight.name}</label>
                    <input
                    className = "popup__input"  
                    type="range"
                    min={userPersonalInfo.unitWeight==='kg'? 35: 70} max={userPersonalInfo.unitWeight==='kg'? 150: 300}
                    name={content.weight.value} 
                    id={content.weight.value}
                    value={userPersonalInfo.weight}
                    onChange ={e => setUserPersonalInfo({...userPersonalInfo,[content.weight.value]:e.target.value})}/>
                    <label className = "inputForm__label">{userPersonalInfo.weight}</label>
                    
                    <select 
                    className="selection dropdown"
                    onChange = {e => setUserPersonalInfo({...userPersonalInfo, unitWeight:e.target.value})}
                    >
                        <option className="text">
                            {userPersonalInfo.unitWeight}
                        </option>
                        {
                            content.weight.units.map((unit,index) => {
                                if(unit !== userPersonalInfo.unitWeight){
                                   return <option key ={index} value={unit}>{unit}</option>
                                }
                                else return null
                            })
                        }
                        
                    </select>

                </div>

                <div className = "inputForm__field">
                    <label className = "inputForm__label" htmlFor={content.height.value}>{content.height.name}</label>
                    <input
                    className = "popup__input"  
                    type="range"
                    min={userPersonalInfo.unitHeight==='cm'? 100: 40} max={userPersonalInfo.unitHeight==='cm'? 250: 100 }
                    name={content.height.value} 
                    id={content.height.value}
                    value={userPersonalInfo.height}
                    onChange ={e => setUserPersonalInfo({...userPersonalInfo,[content.height.value]:e.target.value})}/>
                    <label className = "inputForm__label">{userPersonalInfo.height}</label>
                    
                    <select 
                    className="selection dropdown"
                    onChange = {e => setUserPersonalInfo({...userPersonalInfo, unitHeight:e.target.value})}
                    >
                        <option className="text">{userPersonalInfo.unitHeight}</option>
                        {
                            content.height.units.map((unit,index) => {
                                if(unit !== userPersonalInfo.unitHeight){
                                   return <option key = {index} value={unit}>{unit}</option>
                                } else return null
                            })
                        }
                    </select>

                </div>

                <div className = "inputForm__field">
                    <label className = "inputForm__label" htmlFor={content.gender.value}>{content.gender.name}</label>
                    <select 
                    className="selection dropdown"
                    onChange = {e => setUserPersonalInfo({...userPersonalInfo,gender:e.target.value})}
                    >
                        <option className="text">{userPersonalInfo.gender}</option>
                        {
                            content.gender.options.map((option,index) => {
                                if(option !== userPersonalInfo.gender){
                                   return <option key = {index} value={option}>{option}</option>
                                } else return null
                            })
                        }
                    </select>
                </div>

                <div className = "inputForm__field">
                    <label className = "inputForm__label" htmlFor={content.activity.value}>{content.activity.name}</label>
                    <select 
                    className="selection dropdown inputForm__select-l"
                    onChange = {e => setUserPersonalInfo({...userPersonalInfo,[content.activity.value]:e.target.value})}
                    >
                        <option className="text option">{userPersonalInfo.activity}</option>
                        {
                            content.activity.options.map((option,index) => {
                                if(option !== userPersonalInfo.activity){
                                   return <option className="option" key ={index} value={option}>{option}</option>
                                } else return null
                            })
                        }
                    </select>
                </div>
                <div className = "inputForm__field u-center-text">
                <Button className = "btn btn-light" text = {content.submit.buttonText} onClickButton = {() => props.checkInfoComplete('userPersonalInfo',userPersonalInfo)}/>
                </div>
            </div>
        </div>
    );
};

export default UserInformationForm;