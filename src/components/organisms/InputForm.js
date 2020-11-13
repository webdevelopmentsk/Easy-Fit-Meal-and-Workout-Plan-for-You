import React , { useState , useEffect } from 'react';
import Button from '../atoms/Button';

const InputForm = props => {

    const [userData,setUserData] = useState(props.state[props.stateType]);
    const [displayStatus,setDisplayStatus] = useState('');

    const checkInfoComplete = () =>{
        let isComplete = true;

        for (let key in userData) {

            if(userData[key] === ''){isComplete = false;}
            else if(userData[`${key}Min`] && parseInt(userData[key]) <= parseInt(userData[`${key}Min`])){isComplete = false; }
            else if(userData[`${key}Max`] && parseInt(userData[key]) >= parseInt(userData[`${key}Max`])){isComplete = false; }
        };
 
         if(isComplete){
            userData.complete = true;
            props.updateUserData(props.stateType,userData);
         }else{
            setDisplayStatus(props.content[props.stateType].submit.incomplete)
         }
    };
    useEffect(() =>{
        userData.goalType === 'maintain-weight'?
        setUserData({...userData,displayAllFields:false})
        :setUserData({...userData,displayAllFields:true})
    },[userData.goalType])
    return(

        <div className ="popup">
            <div className="ui action input popup_inner inputForm">
            {
                props.content[props.stateType].inputForm.map((feild,index) => {

                    return (
                    <div className = "inputForm__field" key ={index}>
                        {userData.displayAllFields &&
                            <label className = "inputForm__label" 
                            htmlFor={feild.inputName.value}
                            >{feild.inputName.text}</label>
                        }                        
                        {!userData.displayAllFields && feild.inputName.value === 'goalType' &&
                            <label className = "inputForm__label" 
                            htmlFor={feild.inputName.value}
                            >{feild.inputName.text}</label>
                        }
                        {userData.displayAllFields && feild.input !== '' && 
                            <input className = "inputForm__input" 
                            type ={feild.input.type}
                            min ={feild.input.min}
                            max ={feild.input.max} 
                            onChange = {e => setUserData({...userData, [feild.inputName.value] : e.target.value})}
                            id={feild.inputName.value} />
                        }
                        {userData.displayAllFields && feild.units !== '' && 
                            <select 
                            className="selection dropdown inputForm__select inputForm__select-s"
                            onChange = {e => setUserData({...userData, [feild.units.name] : e.target.value})}
                            >
                                <option className="text">{userData[feild.units.name]}</option>
                                {
                                    feild.units.list.map((unit,index) => {
                                        if(unit !== userData[feild.units.name]){
                                           return <option key = {index} value={unit}>{unit}</option>
                                        } else return null
                                    })
                                }
                            </select>
                        } 
                        {userData.displayAllFields && feild.select !== '' &&
                            <select 
                            className="selection dropdown inputForm__select inputForm__select-l"
                            onChange = {e => setUserData({...userData, [feild.inputName.value] : e.target.value})}
                            >
                                <option className="text">{feild.select[0]}</option>
                                {
                                    feild.select.map((option,index) => {
                                        if(option !== feild.select[0]){
                                           return <option key = {index} value={option}>{option}</option>
                                        } else return null
                                    })
                                }
                            </select>
                        }
                        {!userData.displayAllFields && feild.select !== '' && feild.inputName.value === 'goalType' &&
                            <select 
                            className="selection dropdown inputForm__select inputForm__select-l"
                            onChange = {e => setUserData({...userData, [feild.inputName.value] : e.target.value})}
                            >
                                <option className="text">{userData.goalType}</option>
                                {
                                    feild.select.map((option,index) => {
                                        if(option !== userData.goalType){
                                           return <option key = {index} value={option}>{option}</option>
                                        } else return null
                                    })
                                }
                            </select>
                        }
                    </div>

                    )
                })
            }
                <div className = "inputForm__field">
                    {displayStatus && <div className = 'inputForm__status'>{displayStatus}</div>}
                </div>
                <div className = "inputForm__field u-font-btn-m">
                    <Button className = "btn btn--green" text = {props.content[props.stateType].submit.buttonText} onClickButton = {checkInfoComplete}/>
                </div>
            </div>
        </div>
    );

};

export default InputForm;

