import React from 'react';
import { content } from '../data/content';
import { Link } from 'react-router-dom'
import videoBG from '../assets/landingPage-BG.mov';

const LandingPage = props => {

    const content_landingPage = content.landingPage;
    return(
        props.showLandingPage && 
        <div className="mainContainer mainContainer__landingPage">
            <div className = "landingPage__background">
            <video className = "landingPage__background--content" preload autoPlay muted loop>
            <source src = {videoBG} type="video/mp4" />
            </video>
            </div>
            <div className ="subContainer__landingPage">            
                <div className="item__landingPage">
                    <h1 className = 'heading heading__l heading__light'>{content_landingPage.heading1}</h1>
                </div>
                <div className="item__landingPage">
                    <div className = 'heading heading__s heading__light'>{content_landingPage.heading2}</div>
                </div>

                <div className="item__landingPage">
                    <Link 
                    className = "btn btn--transparent btn-moveInTop" 
                    to={props.path} 
                    onClick ={props.onButtonExploreClick}
                    >{content_landingPage.buttonExplore}
                    </Link>
                </div>  
            </div>     
        </div>
    )
};

export default LandingPage;
