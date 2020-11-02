import $ from 'jquery';

const getRandomQuote = async () => {

    let result = await $.ajax({
        url: "https://api.forismatic.com/api/1.0/",
        jsonp: "jsonp",dataType: "jsonp",data: {method: "getQuote",lang: "en",format: "jsonp"}
    })

    console.log(result);
    return result;
}

export default getRandomQuote;

//response.quoteText
//response.quoteAuthor

//.done(response => {console.log(response); return response })
