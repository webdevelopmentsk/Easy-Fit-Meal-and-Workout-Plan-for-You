import React , { useState, useEffect }from 'react';

import { content } from '../data/content';
import { Context } from '../context/Provider';

import UserInformationForm from '../components/organisms/UserInformationForm';
import UserGoalForm from '../components/organisms/UserGoalForm';

import Button from '../components/atoms/Button';

const HomePage = () => {

    const content_homePage = content.homePage;
    const {state,changeState} = React.useContext(Context);

    const [open, setOpen] = useState({
        userPersonalInfo: false,
        goal:false
    })

    const togglePopup = type => {

        setOpen({...open,[type] : !open[type]});
    };

    const checkInfoComplete = (type,data) =>{

        let isComplete = true;
        for (const [key, value] of Object.entries(data)) {
            if(value === 0) {isComplete = false;}
        };

        if(isComplete){
            window.alert(content_homePage[type].submit.displayComplete);
            togglePopup(type);
            changeState(type,data);

        }
        else{
            window.alert(content_homePage[type].submit.displayInComplete);
        }
    };

    const calculateCalories = () => {

    };

    return (
    <>
    <Button text = {content_homePage.userPersonalInfo.text} onClickButton = {() =>togglePopup('userPersonalInfo')}/>
    {
        open.userPersonalInfo &&  <UserInformationForm
                        content = {content_homePage}
                        checkInfoComplete = {checkInfoComplete}
                        />
    }
    <br />
    <Button text = {content_homePage.userGoal.text.heading} onClickButton = {() => togglePopup('goal')}/>
    {
        open.goal &&  <UserGoalForm 
                        content = {content_homePage}
                        state ={state}
                        />
    }
    
    <br />
    <Button text = {content_homePage.calculateCalories.text} onClickButton = {()=>console.log('test')}/>
    </>)
}

export default HomePage;