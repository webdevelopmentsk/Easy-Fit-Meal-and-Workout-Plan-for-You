import React from 'react';
import bgVideo from '../assets/mainNavigation-BG.mov'

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
        <div className = "Navigation">
            <div className = "Navigation__background">
                <video className = "Navigation__background--content" autoPlay muted loop>
                    <source src = {bgVideo} type="video/mp4" />
                </video>
            </div>
            <div className = "Navigation__group" >{renderRoutes}</div>
        </div>
    );
}

export default Navigation;
