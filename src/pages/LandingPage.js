import React from 'react';
import { content } from '../data/content';
import { Link } from 'react-router-dom';
import videoBG from '../assets/landingPage-BG.mp4';

const LandingPage = props => {

    const content_landingPage = content.landingPage;
    return(
        props.showLandingPage && 
        <div className="mainContainer__landingPage">
            <div className = "landingPage__background">
            <video className = "landingPage__background--content" preload="true"  autoPlay muted loop>
            <source src = {videoBG} type="video/mp4" />
            </video>
            </div>
            <div className ="subContainer__landingPage"> 
                <div className ="subContainer__landingPage__wrapper">
                    <div className="item__landingPage">
                        <h1 className = 'heading heading__l heading__light'>{content_landingPage.heading1}</h1>
                    </div>
                    <div className="item__landingPage">
                        <div className = 'heading heading__s heading__light'>{content_landingPage.heading2}</div>
                    </div>

                    <div className="item__landingPage">
                        <Link 
                        className = "btn btn--transparent" 
                        to={props.path} 
                        onClick ={props.onButtonExploreClick}
                        >{content_landingPage.buttonExplore}
                        </Link>
                    </div>  
                </div>            
            </div>     
        </div>
    )
};

export default LandingPage;
