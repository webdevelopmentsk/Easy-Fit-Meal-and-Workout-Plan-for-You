import React from 'react';
import bgVideo from '../assets/landingPage-BG.mp4'

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
                <video className = "navigation__background--content" autoPlay muted loop>
                <source src = {bgVideo} type="video/mp4" />
                </video>
            </div>
            <div className = "navigation__group" >{renderRoutes}</div>
        </div>
    );
}

export default Navigation;

/*
<video className = "navigation__background--content" autoPlay muted loop>
<source src = {bgVideo} type="video/mp4" />
</video>
*/