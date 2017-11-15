var request = require("request");
var Twitter = require('twitter');
var movieName = "batman";
var queryUrl;
var Spotify = require('node-spotify-api');
var fs = require("fs");

//// do this 
if (process.argv[2] === "do-what-it-says") {

fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
        return console.log(error);
    }

    var dataArr = data.split(",");
    console.log(dataArr[0]);

    if (dataArr[0] === "spotify-this-song") {
        var songName = dataArr[1];
        var spotify = new Spotify({
            id: "55ea33cf581c480f8fd6c50982fb2e34",
            secret: "4339151d63574e42ab3aa93a7375190b"
        });

        spotify.search({ type: 'track', query: songName }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("Song " + songName);
            console.log("Artist Name:  " + data.tracks.items[1].artists[0].name);
            console.log("Album Name:  " + data.tracks.items[1].album.name);
            var str = data.tracks.items[1].uri;
            var res = str.replace("spotify:track:", "https://open.spotify.com/track/");
            console.log("Preview URL:  " + res);
        });
    }

});
}
//// spotify

function spotify() {
    var songName = process.argv[3];
    var spotify = new Spotify({
        id: "55ea33cf581c480f8fd6c50982fb2e34",
        secret: "4339151d63574e42ab3aa93a7375190b"
    });

    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("Song " + songName);
        console.log("Artist Name:  " + data.tracks.items[1].artists[0].name);
        console.log("Album Name:  " + data.tracks.items[1].album.name);
        var str = data.tracks.items[1].uri;
        var res = str.replace("spotify:track:", "https://open.spotify.com/track/");
        console.log("Preview URL:  " + res);
    });
}





if (process.argv[2] === "spotify-this-song") {
    spotify();
}


function twitterF() {

    var client = new Twitter({
        consumer_key: 'TX8seLOn81kChBFq3FFm5VJJB',
        consumer_secret: 'cTDxyXEc015abHUcvfpG2MmJEuo8KtjhSlfcvXfM2gPmLMq6FM',
        access_token_key: '2700087129-2LXaweWmGLnukfDk76OAhpkCqewM8qmwZEteypz',
        access_token_secret: 'Zb84qPiLgVmsIF7UkmXs9R2IBQqEPJGRiCaLw4yE01lev',
    });
    var params = { screen_name: '@DaneSherrets' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < 19; i++) {
                console.log(tweets[i].text);
                console.log(tweets[i].created_at);
            }

        }
    });

}


///// twitter

if (process.argv[2] === "my-tweets") {
    twitterF();

}
/// code for the IMDB call 

function IMDB() {

    if (process.argv[3] == "") {
        /// this doesn't work 
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

if (process.argv[2] === "movie-this") {
    IMDB();

}