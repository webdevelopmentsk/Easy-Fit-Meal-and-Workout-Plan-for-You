const getNews =  async () => {

    const news = ['mindfulness','diet food','healthy exercise'];
    let articles =[];
    let today = new Date();
    let date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
    Promise.all(news.map( async searchTerm => {
        try{
            let url = `https://gnews.io/api/v4/search?q=${searchTerm}&from=${date}&lang=en&sortBy=relevance&topic=health&token=ee207bbe02ecd6ea4069df27d3fc95e3`;
            var req = new Request(url);
            await fetch(req).then(res => res.json()).then(data => {
                data.articles.forEach(NewArticle =>{
                    let push = true;
                    articles.forEach(article =>{
                        if(article.title === NewArticle.title || article.description === NewArticle.description){
                            push = false;
                        }
                    });
                    push && articles.push(NewArticle);
                })
            });
        }catch(err){

        }
    }));

    
    return articles;
    
}

export default getNews;
//https://newsapi.org/v2/everything?q=${searchTerm}&from=${date}&sortBy=popularity&apiKey=ce612000a7554560bf54818ef4b67e8a