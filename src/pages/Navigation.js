import React from 'react';
import bgVideo from '../assets/landingPage-BG.mp4'
import { content } from '../data/content';
import { Link } from 'react-router-dom'

const Navigation = ({routes,onHeaderClick}) => {

    const renderRoutes = routes.map( (route,index) => {
        return(
          <Link className = "navigation__link"
              key ={index} to={route.link}
              onClick ={onHeaderClick}
            > <i className= {route.icon}></i> {route.name}</Link>
        );
    })
    return (
        <div className = "navigation">
            <div className = "navigation__background">
                <video className = "navigation__background--content" autoPlay muted loop playsInline>
                <source src = {bgVideo} type="video/mp4" />
                </video>
            </div>
            <div className = "navigation__group" >
            <div className ="navigation__heading"> 
                    <h1 className ="navigation__heading--text heading__l">{content.appLogo.name}</h1>
            </div>
                {renderRoutes}
            </div>
        </div>
    );
}

export default Navigation;
