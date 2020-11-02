import React , { useState, useEffect }from 'react';
import $ from 'jquery';
import { content } from '../data/content';
import { Context } from '../context/Provider';

//functions
import dailyCalorieIntake  from '../algorithms/dailyCalorieIntake';
import getNews from '../algorithms/getNews';
//Components
import UserInformationForm from '../components/organisms/UserInformationForm';
import UserGoalForm from '../components/organisms/UserGoalForm';
import RenderDailyCarlorieNeed from '../components/molecules/RenderDailyCarlorieNeed';
import RenderCaloriesRemain from '../components/molecules/RenderCaloriesRemain';
import RenderArticleCardList from '../components/molecules/RenderArticleCardList';
import Button from '../components/atoms/Button';
import RandomQuoteCard from '../components/molecules/RandomQuoteCard';

//import PageMenuBar from '../components/organisms/PageMenuBar';
//import { routesArticleBar } from '../data/routes';
//import { Switch, Route} from 'react-router';

const HomePage = () => {

    const content_homePage = content.homePage;
    const {state,changeState} = React.useContext(Context);

    const [open, setOpen] = useState({
        userPersonalInfo: false,
        userGoal:false
    });

    const [randomQuote, setRandomQuote] = useState([]);

    const togglePopup = type => {setOpen({...open,[type] : !open[type]});};

    const checkInfoComplete = (type,data) =>{

        let dataUserGoal = state.userGoal
        dataUserGoal.complete = false;
        changeState('userGoal',dataUserGoal);

       let isComplete = true;
       for (let key in data) {
           if(data[key] === 0) {isComplete = false;}
       };


        if(isComplete){
            togglePopup(type);
            data.complete = true;
            changeState(type,data);
        }
    };

    useEffect(()=>{//Get goalCal
        if(state.userPersonalInfo.complete && state.userPersonalInfo.complete){
            let [dailyCalIntake,weeks] = dailyCalorieIntake(state);
            let data = state.calTrack;
            data.goalCal = dailyCalIntake;
            data.weeks = weeks;
            changeState('calTrack',data);
        }

    },[state.userGoal]);

    const getArticles = async() => {
        let articles_homePage = await getNews(content_homePage.pageName);
        changeState('articles_homePage',articles_homePage);
    };

    const getRandomQuote = async () => {
        let totalQuotes = [];
        let result = await $.ajax({
            url: "https://api.forismatic.com/api/1.0/",
            jsonp: "jsonp",dataType: "jsonp",data: 
            {method: "getQuote",lang: "en",format: "jsonp"}
        });
        totalQuotes.push(result) 
        setRandomQuote(totalQuotes);
    };

    useEffect(() =>{ //Get articles and a random quote
        getArticles();
        getRandomQuote();

    },[])

    const addItem = (item,type) => {
        let newList = [...state[type],item];
        changeState(type,newList)
      };    

    const deleteItemFavRecipe = (index,type) => {
        let newList = [...state[type]];
        newList.splice(index,1);
        changeState(type,newList);
      };
    
    const checkIfFavorite = (item,type) => {
        let isLiked = false;
      
        state.favoriteArticles.length > 0 && state.favoriteArticles.map(
          obj => { 
            if(obj.title === item.title) 
            {
              isLiked = true;
            } return isLiked;}
        );
      
        return isLiked;
    }

    const onChangeItem = (item,type) =>{
    
        let value = false;
        let index = -1;
        state.favoriteArticles.map((obj,idx) => {
        if(obj.title === item.title)
        {value = true;index=idx;}
        return null;
        });
    
        value ? deleteItemFavRecipe(index,type):addItem(item,type)
    
    };

    return (
    <div className= 'mainContainer mainContainer__homePage'>


        {!state.userPersonalInfo.complete &&
        <div className= 'subContainer__homePage subContainer__homePage--userInfo'>
            <div className= 'subContainer__homePage--userInfo--content'>
                <div className = 'item__homePage'>
                    <h2 className = 'heading heading__s'>{content_homePage.userPersonalInfo.text.heading1}</h2>
                </div>
                <div className = 'item__homePage'>
                    <div className = 'paragraph paragraph--dark u-p-1rem'>{content_homePage.userPersonalInfo.text.heading2}</div>
                </div>
                <div className = 'item__homePage'>
                    <Button className = 'btn btn--green item__homePage' 
                    text = {state.userPersonalInfo.complete ? 
                    content_homePage.userPersonalInfo.text.textAfter:
                    content_homePage.userPersonalInfo.text.textbtn} 
                    onClickButton = {() =>togglePopup('userPersonalInfo')}/>
                </div>
            </div>
        </div>
        }
        {
        open.userPersonalInfo &&  <UserInformationForm
                        content = {content_homePage}
                        state ={state}
                        checkInfoComplete = {checkInfoComplete}
                        />
        }
        {(state.userPersonalInfo.complete && !state.userGoal.complete) &&
        <div className= 'subContainer__homePage subContainer__homePage--userGoal'>
            <div className= 'subContainer__homePage--userGoal--content'>
                <div className = 'item__homePage'>
                    <h2 className = 'heading heading__s'>{content_homePage.userGoal.text.heading1}</h2>
                </div>
                <div className = 'item__homePage'>
                    <p className = 'paragraph paragraph--dark u-p-1rem'>{content_homePage.userGoal.text.heading2}</p>
                </div>
                <div className = 'item__homePage'>
                    <Button className = 'btn btn--green item__homePage' 
                    text = {state.userGoal.complete ? 
                    content_homePage.userGoal.text.textAfter :
                    content_homePage.userGoal.text.textbtn} 
                    onClickButton = {() => togglePopup('userGoal')}/>
                </div>

                {open.userGoal &&  <UserGoalForm 
                content = {content_homePage}
                state ={state}
                checkInfoComplete = {checkInfoComplete}
                />}
            </div>
        </div>

        }
        {state.userGoal.complete && state.userPersonalInfo.complete &&
        <>
            <div className= 'subContainer__homePage subContainer__homePage--result'>
                <div className= 'subContainer__homePage--result--content'>
                    <RenderDailyCarlorieNeed 
                        state = {state}
                        content = {content_homePage} />
                </div>
            </div>
            <div className= 'subContainer__homePage subContainer__homePage--calories'>
                <RenderCaloriesRemain />
                <RandomQuoteCard items = {randomQuote}/>
            </div>
            
        </>
        }


    {state.articles_homePage.length > 0 && 
        <RenderArticleCardList 
        items = {state.articles_homePage}
        heading = {content_homePage.articles.heading}
        checkIfFavorite = {checkIfFavorite}
        onChangeItem ={onChangeItem}
        type ="favoriteArticles"
    />}

    {
    state.favoriteArticles.length > 0 && <RenderArticleCardList 
    items = {state.favoriteArticles}
    heading = {content_homePage.favoriteArticles.heading}
    checkIfFavorite = {checkIfFavorite}
    onChangeItem ={onChangeItem}
    type ="favoriteArticles"
    />
    }


    </div>
    );
}

export default HomePage;

/*
            <RenderArticleCardList 
            items = {state.articles_homePage}
            heading = {content_homePage.articles.heading}
            checkIfFavorite = {checkIfFavorite}
            onChangeItem ={onChangeItem}
            type ="favoriteArticles"
            getArticles ={getArticles}
            />
*/

/*
        {!state.userPersonalInfo.complete &&
        <div className= 'subContainer__homePage subContainer__homePage--userInfo'>
            <div className= 'subContainer__homePage--userInfo--content'>
                <div className = 'item__homePage'>
                    <h2 className = 'heading heading__s'>{content_homePage.userPersonalInfo.text.heading1}</h2>
                </div>
                <div className = 'item__homePage'>
                    <div className = 'paragraph paragraph--dark u-p-1rem'>{content_homePage.userPersonalInfo.text.heading2}</div>
                </div>
                <div className = 'item__homePage'>
                    <Button className = 'btn btn--green item__homePage' 
                    text = {state.userPersonalInfo.complete ? 
                    content_homePage.userPersonalInfo.text.textAfter:
                    content_homePage.userPersonalInfo.text.textbtn} 
                    onClickButton = {() =>togglePopup('userPersonalInfo')}/>
                </div>
            </div>
        </div>
        }
        {
        open.userPersonalInfo &&  <UserInformationForm
                        content = {content_homePage}
                        state ={state}
                        checkInfoComplete = {checkInfoComplete}
                        />
        }
        {(state.userPersonalInfo.complete && !state.userGoal.complete) &&
        <div className= 'subContainer__homePage subContainer__homePage--userGoal'>
            <div className= 'subContainer__homePage--userGoal--content'>
                <div className = 'item__homePage'>
                    <h2 className = 'heading heading__s'>{content_homePage.userGoal.text.heading1}</h2>
                </div>
                <div className = 'item__homePage'>
                    <p className = 'paragraph paragraph--dark u-p-1rem'>{content_homePage.userGoal.text.heading2}</p>
                </div>
                <div className = 'item__homePage'>
                    <Button className = 'btn btn--green item__homePage' 
                    text = {state.userGoal.complete ? 
                    content_homePage.userGoal.text.textAfter :
                    content_homePage.userGoal.text.textbtn} 
                    onClickButton = {() => togglePopup('userGoal')}/>
                </div>

                {open.userGoal &&  <UserGoalForm 
                content = {content_homePage}
                state ={state}
                checkInfoComplete = {checkInfoComplete}
                />}
            </div>
        </div>

        }
        {state.userGoal.complete && state.userPersonalInfo.complete &&
        <>
            <div className= 'subContainer__homePage subContainer__homePage--result'>
            <div className= 'subContainer__homePage--result--content'>
                <RenderDailyCarlorieNeed 
                    state = {state}
                    content = {content_homePage} />
            </div>
            </div>
            <div className= 'subContainer__homePage subContainer__homePage--calories'>
                <RenderCaloriesRemain />
                <RandomQuoteCard item = {randomQuote}/>
            </div>
            
        </>
        }
*/