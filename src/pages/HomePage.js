import React , { useState, useEffect }from 'react';

import { content } from '../data/content';
import { Context } from '../context/Provider';

//functions
import dailyCalorieIntake  from '../algorithms/dailyCalorieIntake'
//Components
import UserInformationForm from '../components/organisms/UserInformationForm';
import UserGoalForm from '../components/organisms/UserGoalForm';
import ResultEnergyPerDay from '../components/molecules/ResultEnergyPerDay';
import CaloriesRemain from '../components/molecules/CaloriesRemain';
import Button from '../components/atoms/Button';

import getYoutube from '../algorithms/getYoutube';

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
       for (let key in data) {
           if(data[key] === 0) {isComplete = false;}
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

    useEffect(()=>{//Get goalCal
        if(state.userPersonalInfo.complete && state.userPersonalInfo.complete){
            let [dailyCalIntake,weeks] = dailyCalorieIntake(state);
            let data = state.calTrack;
            data.goalCal = dailyCalIntake;
            data.weeks = weeks;
            changeState('calTrack',data);
        }

    },[state.userGoal]);

    return (
    <div className= 'mainContainer mainContainer__homePage'>

        {!state.userPersonalInfo.complete &&
        <div className= 'subContainer__homePage'>
            <div className = 'item__homePage'>
                <h2 className = 'heading__h2 u-uppercase'>{content_homePage.userPersonalInfo.text.heading1}</h2>
            </div>
            <div className = 'item__homePage'>
                <p className = 'paragraph'>{content_homePage.userPersonalInfo.text.heading2}</p>
            </div>
            <div className = 'item__homePage'>
                <Button className = 'btn btn-white btn-moveInTop item__homePage u-font-weight-bold' 
                text = {state.userPersonalInfo.complete ? 
                content_homePage.userPersonalInfo.text.textAfter:
                content_homePage.userPersonalInfo.text.textbtn} 
                onClickButton = {() =>togglePopup('userPersonalInfo')}/>
            </div>
        </div>
        }
    {
        open.userPersonalInfo &&  <UserInformationForm
                        content = {content_homePage}
                        state ={state}
                        checkInfoComplete = {checkInfoComplete}
                        />
    }
    {(state.userPersonalInfo.complete && !state.userGoal.complete) &&
        <div className= 'subContainer__homePage'>
            <div className = 'item__homePage'>
                <h2 className = 'heading__h2 u-uppercase'>{content_homePage.userGoal.text.heading1}</h2>
            </div>
            <div className = 'item__homePage'>
                <p className = 'paragraph'>{content_homePage.userGoal.text.heading2}</p>
            </div>
            <div className = 'item__homePage'>
                <Button className = 'btn btn-white btn-moveInTop item__homePage u-font-weight-bold' 
                text = {state.userGoal.complete ? 
                content_homePage.userGoal.text.textAfter :
                content_homePage.userGoal.text.textbtn} 
                onClickButton = {() => togglePopup('userGoal')}/>
            </div>

            {open.userGoal &&  <UserGoalForm 
            content = {content_homePage}
            state ={state}
            checkInfoComplete = {checkInfoComplete}
            />}
        </div>
    }
    {state.userGoal.complete && state.userPersonalInfo.complete &&
        <div className= 'subContainer__homePage'>
            <ResultEnergyPerDay 
                state = {state}
                content = {content_homePage} />
            <CaloriesRemain />
        </div>
    }
    </div>
    );
}

export default HomePage;

//    <button onClick = {testAPI}>Get Data</button>
// const testAPI = () => getYoutube();
