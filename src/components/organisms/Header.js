import React from 'react';

import {Link} from 'react-router-dom'

const Header = ({routes}) => {

    const renderRoutes = routes.map( (route,index) => {
        return(
            <Link key ={index} to={route.link} className = "item"> <i className= {route.icon}></i> </Link>
        );
    })
    return (
        <div className="ui secondary pointing menu">{renderRoutes}</div>
    );
}

export default Header;
