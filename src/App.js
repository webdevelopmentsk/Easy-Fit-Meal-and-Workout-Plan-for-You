import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Provider from './context/Provider';

//Organisms
import Header from './components/organisms/Header';
//Pages
import HomePage from './pages/HomePage';
import MealPlan from './pages/MealPlan';
import WorkoutPlan from './pages/WorkoutPlan';

//data
import { routes } from './data/routes';

//style
import './styles/css/style.css'

const App = () => {

  return (
    <>
    <Provider>
      <Header routes ={routes} />
      <Switch>
          <Route
            exact path="/"
            component ={HomePage}
          />
          <Route
            path="/mealplan"
            component ={MealPlan}
          />
          <Route
            path="/workoutplan"
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
