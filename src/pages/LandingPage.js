import React from 'react';
import { content } from '../data/content';
import { Link } from 'react-router-dom'

const LandingPage = props => {

    const content_landingPage = content.landingPage;
    return(
        props.showLandingPage && 
        <div className="mainContainer mainContainer__landingPage">
            <div className="subContainer__landingPage">
                <h1 className = 'heading__h1 item__landingPage'>{content_landingPage.heading1}</h1>
            </div>
            <div className="subContainer__landingPage">
                <h3 className = 'heading__h3 item__landingPage'>{content_landingPage.heading2}</h3>
            </div>

            <div className="subContainer__landingPage">
                <Link 
                className = "btn btn-dark btn-moveInTop item__landingPage" 
                to={props.path} 
                onClick ={props.onButtonExploreClick}
                >{content_landingPage.buttonExplore}
                </Link>
            </div>       
        </div>
    )
};

export default LandingPage;
