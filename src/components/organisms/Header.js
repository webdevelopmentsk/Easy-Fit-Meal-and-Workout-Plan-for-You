import React from 'react';

import { Link } from 'react-router-dom'

const Header = ({routes,onHeaderClick}) => {

    const renderRoutes = routes.map( (route,index) => {
        return(
        <Link className = "item header-link" 
              key ={index} to={route.link}
              onClick ={onHeaderClick}
        > <i className= {route.icon}></i> {route.name}</Link>
        );
    })
    return (
        <div className="header">{renderRoutes}</div>
    );
}

export default Header;
