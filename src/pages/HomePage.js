import React , { useState, useEffect }from 'react';

import { content } from '../data/content';
import { Context } from '../context/Provider';

//functions
import dailyCalorieIntake  from '../calculations/dailyCalorieIntake'
//Components
import UserInformationForm from '../components/organisms/UserInformationForm';
import UserGoalForm from '../components/organisms/UserGoalForm';
import ResultEnergyPerDay from '../components/molecules/ResultEnergyPerDay';

import Button from '../components/atoms/Button';

const HomePage = () => {

    const content_homePage = content.homePage;
    const {state,changeState} = React.useContext(Context);

    const [open, setOpen] = useState({
        userPersonalInfo: false,
        userGoal:false
    });

    const togglePopup = type => {setOpen({...open,[type] : !open[type]});};

    const checkInfoComplete = (type,data) =>{

        let dataUserGoal = state.userGoal
        dataUserGoal.complete = false;
        changeState('userGoal',dataUserGoal);

        let isComplete = true;
        for (const [key, value] of Object.entries(data)) {
            if(value === 0) {isComplete = false;}
        };

        if(isComplete){
            //window.alert(content_homePage[type].submit.displayComplete);
            togglePopup(type);
            data.complete = true;
            changeState(type,data);
        }
        else{
            window.alert(content_homePage[type].submit.displayInComplete);
        }
    };

    useEffect(()=>{
        //Get goalCal
        if(state.userPersonalInfo.complete && state.userPersonalInfo.complete){
            let [dailyCalIntake,weeks] = dailyCalorieIntake(state);
            let data = state.calTrack;
            data.goalCal = dailyCalIntake;
            data.weeks = weeks;
            changeState('calTrack',data);
        }

    },[state.userGoal]);

    return (
    <>
    <Button text = {state.userPersonalInfo.complete ? content_homePage.userPersonalInfo.textAfter:content_homePage.userPersonalInfo.text} 
            onClickButton = {() =>togglePopup('userPersonalInfo')}/>
    {
        open.userPersonalInfo &&  <UserInformationForm
                        content = {content_homePage}
                        state ={state}
                        checkInfoComplete = {checkInfoComplete}
                        />
    }
    {state.userPersonalInfo.complete &&
        <>
            <Button text = {state.userGoal.complete ? content_homePage.userGoal.text.headingAfter :content_homePage.userGoal.text.heading} 
            onClickButton = {() => togglePopup('userGoal')}/>
            {open.userGoal &&  <UserGoalForm 
            content = {content_homePage}
            state ={state}
            checkInfoComplete = {checkInfoComplete}
            />}
        </>
    }
    {state.userGoal.complete && state.userPersonalInfo.complete &&
    <ResultEnergyPerDay 
        state = {state}
        content = {content_homePage}
    />}
    </>)
}

export default HomePage;