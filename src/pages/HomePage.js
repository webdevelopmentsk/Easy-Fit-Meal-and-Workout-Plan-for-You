import React , { useState, useEffect }from 'react';

import { content } from '../data/content';
import { Context } from '../context/Provider';

//functions
import dailyCalorieIntake  from '../algorithms/dailyCalorieIntake'
//Components
import UserInformationForm from '../components/organisms/UserInformationForm';
import UserGoalForm from '../components/organisms/UserGoalForm';
import RenderDailyCarlorieNeed from '../components/molecules/RenderDailyCarlorieNeed';
import RenderCaloriesRemain from '../components/molecules/RenderCaloriesRemain';
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
       for (let key in data) {
           if(data[key] === 0) {isComplete = false;}
       };


        if(isComplete){
            togglePopup(type);
            data.complete = true;
            changeState(type,data);
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
        <div className= 'subContainer__homePage subContainer__homePage--userInfo'>
            <div className= 'subContainer__homePage--userInfo--content'>
                <div className = 'item__homePage'>
                    <h2 className = 'heading heading__s'>{content_homePage.userPersonalInfo.text.heading1}</h2>
                </div>
                <div className = 'item__homePage'>
                    <div className = 'paragraph paragraph--dark u-p-1rem'>{content_homePage.userPersonalInfo.text.heading2}</div>
                </div>
                <div className = 'item__homePage'>
                    <Button className = 'btn btn--green item__homePage' 
                    text = {state.userPersonalInfo.complete ? 
                    content_homePage.userPersonalInfo.text.textAfter:
                    content_homePage.userPersonalInfo.text.textbtn} 
                    onClickButton = {() =>togglePopup('userPersonalInfo')}/>
                </div>
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
        <div className= 'subContainer__homePage subContainer__homePage--userGoal'>
            <div className= 'subContainer__homePage--userGoal--content'>
                <div className = 'item__homePage'>
                    <h2 className = 'heading heading__s'>{content_homePage.userGoal.text.heading1}</h2>
                </div>
                <div className = 'item__homePage'>
                    <p className = 'paragraph paragraph--dark u-p-1rem'>{content_homePage.userGoal.text.heading2}</p>
                </div>
                <div className = 'item__homePage'>
                    <Button className = 'btn btn--green item__homePage' 
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
        </div>

    }
    {state.userGoal.complete && state.userPersonalInfo.complete &&
    <>
        <div className= 'subContainer__homePage subContainer__homePage--result'>
        <div className= 'subContainer__homePage--result--content'>
            <RenderDailyCarlorieNeed 
                state = {state}
                content = {content_homePage} />
        </div>
        
        </div>
        <RenderCaloriesRemain />
    </>
    }
    </div>
    );
}

export default HomePage;


//import getYoutube from '../algorithms/getYoutube';
// <button onClick = {testAPI}>Get Data</button>
// const testAPI = () => getYoutube();
