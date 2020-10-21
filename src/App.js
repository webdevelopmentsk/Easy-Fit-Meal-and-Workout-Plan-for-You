import React , { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import Provider from './context/Provider';

//Organisms
import Header from './components/organisms/Header';
import Menu from './components/organisms/Menu';
//Pages
import HomePage from './pages/HomePage';
import MealPlan from './pages/MealPlan';
import WorkoutPlan from './pages/WorkoutPlan';
import LandingPage from './pages/LandingPage';
//data
import { routes } from './data/routes';

//style
import './styles/sass/main.scss'

const App = () => {

  const [showHeader, setShowHeader] = useState(false)
  const [showLandingPage, setShowLandingPage] = useState(true);
  const toggleHeader = () => setShowHeader(!showHeader); 
  const closeLandingPage = ()  => setShowLandingPage(false);
  const onHeaderClick = () => {
    setShowHeader(!showHeader); 
    setShowLandingPage(false);
  };

  return (
    <>
    <Provider>
      <Menu onClickMenu = {toggleHeader}/>
      {showHeader && <Header routes ={routes} onHeaderClick = {onHeaderClick}/>}
      <LandingPage 
      onButtonExploreClick = {() => setShowLandingPage(false)} 
      showLandingPage ={showLandingPage} 
      path ={routes[0].link}
      />
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

    </Provider>
    </>
  );
};

export default App;

/* Use the router that I created.
//import Route from './router/Route';

    <>
      <Header routes ={routes} />
      <Route path="/"><HomePage /></Route>
      <Route path="/mealplan">
      <Provider><MealPlan /></Provider>
      </Route>
    </>
  */
