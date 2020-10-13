import React , { useEffect } from 'react';
import CaloriesRemain from '../components/molecules/CaloriesRemain';
import DisplayDiary from '../components/organisms/DisplayDiary';
import caloriesBurned from '../algorithms/caloriesBurned';
import Header from '../components/organisms/Header';

//content
import { content } from '../data/content';
import { routesExerciseBar } from '../data/routes';
//context
import { Context } from '../context/Provider';

//Routers
import {Switch, Route} from 'react-router-dom';

const WorkoutPlan = () => {

    const content_workoutPlan = content.workOutPlan;
    const {state,changeState} = React.useContext(Context);

    const addItem = (item,type) => {
        console.log(item);console.log(type)
        let newList = [...state[type],item];
        changeState(type,newList)
      };     
      const deleteItem = (item,type)=> {        
        let index = state[type].indexOf(item);
        let newList = [...state[type]];
        newList.splice(index,1);
        changeState(type,newList);
      };

      const onUserExerciseItemSelect = async(item,type,quantity) =>{

        const totalCalBurned = caloriesBurned(item,type,quantity,state)
        let data = {
            label: item,
            time: quantity,
            timeUnit: 'mins',
            calories: totalCalBurned,
            unitCalories: 'Kcal',
        }
        let newList = [...state[type],data];
        changeState(type,newList)
      };
      
      const onClickSelectExerciseItem = async (item,type) =>{
        //let newList = [...state[type],item];
        //changeState(type,newList)
      };

    //CalTotalCalories from Exercise
    useEffect(()=>{
    let totalCal = 0;
    state.cardio.forEach(exercise => {
      let itemCal = Math.round(exercise.calories);
      totalCal = totalCal + itemCal;
    })
    state.strength.forEach(exercise => {
      let itemCal = Math.round(exercise.calories);
      totalCal = totalCal + itemCal;
    })
    state.workoutRoutine.forEach(exercise => {
      let itemCal = Math.round(exercise.calories);
      totalCal = totalCal + itemCal;
    })
    state.otherActivities.forEach(exercise => {
      let itemCal = Math.round(exercise.calories);
      totalCal = totalCal + itemCal;
    })
  
    let data = state.calTrack;
    data.exerciseTotalCal = totalCal;
    changeState('calTrack',data);
  
  
  },[state.cardio,state.strength,state.workoutRoutine,state.otherActivities]);


    return(
        <>
         <CaloriesRemain />
         <DisplayDiary 
              content = {content_workoutPlan.exerciseDiary}
              state ={state}
              deleteItem ={deleteItem}
              isItemObject = {true}
              onUserItemAdded = {onUserExerciseItemSelect}
              searchItemType = 'userExerciseItems'
              onClickSelectItem ={onClickSelectExerciseItem} 
        />
        <Header routes ={routesExerciseBar} />
        <Switch>
                  <Route
                    path="/workoutplan/suggestedexercise"
                  >

                  </Route>
                  <Route
                    path="/workoutplan/searchexercise"
                  >              

                  </Route>
                  <Route
                    path="/workoutplan/favoriteexercise"
                  >

                  </Route>
              </Switch>


        </>
    );
};

export default WorkoutPlan;