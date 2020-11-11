import React from 'react';
import { content } from '../data/content';
import { Link } from 'react-router-dom';
import videoBG from '../assets/landingPage-BG.mp4';

const LandingPage = props => {
    
    return(
        <div className = "navigation">
            <div className = "navigation__background">
                <video className = "navigation__background--content" autoPlay muted loop>
                <source src = {videoBG} type="video/mp4" />
                </video>
            </div>
            <div className = "navigation__group" >
                <div className ="navigation__heading"> 
                    <h1 className ="navigation__heading--text heading__l">{content.appLogo.name}</h1>
                </div>

                {content.landingPage.options.map((item,index) => 
                    <div key ={index} className = "navigation__option">{item}</div>)
                }

                <div className="navigation__btn u-font-btn-l">
                    <Link 
                    className = "btn btn--transparent" 
                    to={props.path} 
                    onClick ={props.onButtonExploreClick}
                    >{content.landingPage.buttonExplore}
                    </Link>
                </div> 
            </div> 
        </div>
    )
};

export default LandingPage;
/*
        <div className="mainContainer__landingPage u-color-white">
            <div className = "landingPage__background">
                <video className = "landingPage__background--content" preload="true"  autoPlay muted loop>
                    <source src = {videoBG} type="video/mp4" />
                </video>
            </div>
            <div className ="subContainer__landingPage"> 
                <div className ="subContainer__landingPage__wrapper">
                    <div className="item__landingPage">
                        <h1 className = 'heading heading__l'>{content_landingPage.heading1}</h1>
                    </div>
                    <div className="item__landingPage">
                        <div className = 'heading heading__s'>{content_landingPage.heading2}</div>
                    </div>

                    <div className="item__landingPage u-font-btn-m">
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
*/