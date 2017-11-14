var request = require("request");
var Twitter = require('twitter');
var movieName = "batman";
var queryUrl;
 


///// twitter
var client = new Twitter({
  consumer_key: 'TX8seLOn81kChBFq3FFm5VJJB',
  consumer_secret: 'cTDxyXEc015abHUcvfpG2MmJEuo8KtjhSlfcvXfM2gPmLMq6FM',
  access_token_key: '2700087129-2LXaweWmGLnukfDk76OAhpkCqewM8qmwZEteypz',
  access_token_secret: 'Zb84qPiLgVmsIF7UkmXs9R2IBQqEPJGRiCaLw4yE01lev',
});

if (process.argv[2] === "my-tweets") {
 
var params = {screen_name: '@DaneSherrets'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	for (var i = 0; i < 19; i++) {
  		console.log(tweets[i].text);
  		console.log(tweets[i].created_at);
  	}
    
  }
});
}
/// code for the IMDB call 

if (process.argv[2] === "movie-this") {
    if (process.argv[3] == "") {
    	
       queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        request(queryUrl, function(error, response, body) {
            console.log(JSON.parse(body).Title);
            console.log(JSON.parse(body).Year);
            console.log("IMDB Rating:  " + JSON.parse(body).Ratings[0].Value);
            console.log("Rotten Tomatos Rating:  " + JSON.parse(body).Ratings[1].Value);
            console.log(JSON.parse(body).Country);
            console.log(JSON.parse(body).Language);
            console.log(JSON.parse(body).Plot);
            console.log(JSON.parse(body).Actors);

        })
    } else {
         movieName = process.argv[3];
        queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        request(queryUrl, function(error, response, body) {
            console.log(JSON.parse(body).Title);
            console.log(JSON.parse(body).Year);
            console.log("IMDB Rating:  " + JSON.parse(body).Ratings[0].Value);
            console.log("Rotten Tomatos Rating:  " + JSON.parse(body).Ratings[1].Value);
            console.log(JSON.parse(body).Country);
            console.log(JSON.parse(body).Language);
            console.log(JSON.parse(body).Plot);
            console.log(JSON.parse(body).Actors);


        })

    };
}