import React from 'react';

import { Link } from 'react-router-dom'

const PageMenuBar = ({routes}) => {

    const renderRoutes = routes.map( (route,index) => {
        return(
        <Link className = "pageMenuBar__link" 
              key ={index} to={route.link}
        ><i className= {`${route.icon} pageMenuBar__link__icon`} /><span className = "pageMenuBar__link__name">{route.name}</span></Link>
        );
    })
    return (
        <div className = "pageMenuBar">{renderRoutes}</div>
    );
}

export default PageMenuBar;
