import { news } from '../data/news';

const getNews =  async (page) => {

    try{
        let pickedIndex = Math.floor(Math.random() * news[page].topics.length);
        let searchTerm = news[page].topics[pickedIndex];
        let today = new Date();
        let date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
        console.log(searchTerm);
        let url = `http://newsapi.org/v2/everything?q=${searchTerm}&from=${date}&sortBy=popularity&apiKey=ce612000a7554560bf54818ef4b67e8a`;
        var req = new Request(url);
        let articles;
        await fetch(req).then(res => res.json()).then(data => {
        articles = data.articles;
        });
        return articles;
    }
    catch(error){
        console.error(error);
        return {};
    }


}

export default getNews;
