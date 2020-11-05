import React from 'react';

import { Link } from 'react-router-dom'

const PageMenuBar = ({routes}) => {

    const renderRoutes = routes.map( (route,index) => {
        return(
        <Link className = "item pageMenuBar__link" 
              key ={index} to={route.link}
        > <i className= {route.icon}></i> </Link>
        );
    })
    return (
        <div className = "pageMenuBar">{renderRoutes}</div>
    );
}

export default PageMenuBar;
