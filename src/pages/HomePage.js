import React from 'react';

import { content } from '../data/content';
import { Context } from '../context/Provider';

import UserInformationForm from '../components/organisms/UserInformationForm';
import UserGoalForm from '../components/organisms/UserGoalForm';

const HomePage = () => {

    const content_homePage = content.homePage;
    const {state,changeState} = React.useContext(Context);
    
    const onInputChange = (value,type) =>{
        console.log('here')
    };


    return (
    <>
    <UserInformationForm
        content = {content_homePage}
        onInputChange ={onInputChange}
    />
    <UserGoalForm 
        content = {content_homePage}
    />
    
    </>)
}

export default HomePage;