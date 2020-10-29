import React , { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import Provider from './context/Provider';

//Organisms
import TopPageMenu from './components/organisms/TopPageMenu';
//Pages
import HomePage from './pages/HomePage';
import MealPlan from './pages/MealPlan';
import WorkoutPlan from './pages/WorkoutPlan';
import LandingPage from './pages/LandingPage';
import Navigation from './pages/Navigation';
//data
import { routes } from './data/routes';

//style
import './styles/sass/main.scss'

const App = () => {

  const [showNavigation, setShowNavigation] = useState(false)
  const [showLandingPage, setShowLandingPage] = useState(true);
  const toggleMainNavigation = () => setShowNavigation(!showNavigation); 
  const onHeaderClick = () => {
    setShowNavigation(!showNavigation); 
    setShowLandingPage(false);
  };

  return (
    <>
    <Provider>
      <LandingPage 
      onButtonExploreClick = {() => setShowLandingPage(false)} 
      showLandingPage ={showLandingPage} 
      path ={routes[0].link}
      />
      {
        !showLandingPage &&
        <>
          <TopPageMenu onClickMenu = {toggleMainNavigation} />
          {showNavigation && 
            <Navigation
            routes ={routes} 
            onHeaderClick = {onHeaderClick}
            />
          }
          <Switch>
            <Route
              exact path= {routes[0].link}
              component ={HomePage}
            />
            <Route
              path= {routes[1].link}
              component ={MealPlan}
            />
            <Route
              path= {routes[2].link}
              component ={WorkoutPlan}
            />
          </Switch>
        </>
      }
    </Provider>
    </>
  );
};

export default App;
