var fs = require("fs");
var liri = require("./keys.js");
var Twitter = require('twitter');
var request = require('request');
var params = process.argv.slice(2);
var spotify = require("spotify");



switch(params[0]){
  case "movie-this":
    getMovie();
    break;

   case "spotify-this":
    getSpotify();
    break;  

    case "my-tweets":
    myTweets();
    break;

  default:
    console.log("err");

}


//Movie Function to search for specific movies. If you don't put a movie in after movie-this it always defaults to Mr Nobody.
function getMovie() {
  if (params[1] === undefined) {
    request('http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&r=json&tomatoes=true', function (error, response, body){
        if (!error && response.statusCode == 200) {
          var movieData = "Title: " + JSON.parse(body)["Title"] + "\r\n" +
                                      "Year: " + JSON.parse(body)["Year"] + "\r\n" +
                                      "About: " + JSON.parse(body)["Plot"] + "\r\n" +
                                      "Actors: " + JSON.parse(body)["Actors"] + "\r\n" +
                                      "IMDB Rating: " + JSON.parse(body)["imdbRating"] + "\r\n" +
                                      "Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"] + "\r\n" +
                                      "Rotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"] + "\r\n" +
                                      "Country: " + JSON.parse(body)["Country"] + "\r\n" +
                                      "Language: " + JSON.parse(body)["Language"] + "\r\n" +
                                      "Genre: " + JSON.parse(body)["Genre"];
          console.log(movieData);
          fs.appendFile("log.txt", movieData, function(err){
        })
          return;
        }      
    })
  } else {
    request('http://www.omdbapi.com/?t=' + params[1] + '&y=&plot=short&r=json&tomatoes=true', function (error, response, body){
        if (!error && response.statusCode == 200) {
          var movieData = "Title: " + JSON.parse(body)["Title"] + "\r\n" +
                                      "Year: " + JSON.parse(body)["Year"] + "\r\n" +
                                      "About: " + JSON.parse(body)["Plot"] + "\r\n" +
                                      "Actors: " + JSON.parse(body)["Actors"] + "\r\n" +
                                      "IMDB Rating: " + JSON.parse(body)["imdbRating"] + "\r\n" +
                                      "Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"] + "\r\n" +
                                      "Rotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"] + "\r\n" +
                                      "Country: " + JSON.parse(body)["Country"] + "\r\n" +
                                      "Language: " + JSON.parse(body)["Language"] + "\r\n" +
                                      "Genre: " + JSON.parse(body)["Genre"];
          console.log(movieData);
                    fs.appendFile("log.txt", movieData,  + "\r\n" + "\r\n" + function(err){
        })
          return;
        }      
    })          
  }
}
// end of Movie Function

function getSpotify() {
  if (params[1] === undefined){
    spotify.search({ type: 'track', query: "What's My Age Again?" }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    var spotifyData = "Song Name: " + data.tracks.items[0].name + "\r\n" + 
                                "Artist: " + data.tracks.items[0].artists[0].name + "\r\n" +
                                "Album: " + data.tracks.items[0].album.name; //+ "\r\n" +
                                // "Song Preview: " + data.tracks.items[0].album.preview_url.;

       console.log(spotifyData);
        fs.appendFile("random.txt", getSpotify,  + "\r\n" + "\r\n" + function(err){
        })
});
  } else {
    spotify.search({ type: 'track', query: params[1] }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    var spotifyData = "Song Name: " + data.tracks.items[0].name + "\r\n" + 
                                "Artist: " + data.tracks.items[0].artists[0].name + "\r\n" +
                                "Album: " + data.tracks.items[0].album.name; //+ "\r\n" +
                                // "Song Preview: " + data.tracks.items[0].album.preview_url.;
    
    console.log(spotifyData); 
              fs.appendFile("random.txt", spotifyData, function(err){
        })
    });
  }
}





function myTweets() {
  var client = new Twitter(liri.twitterKeys);

  client.get( 'statuses/user_timeline' , {screen_name: 'BitCurrents'},  function (error, tweets, response){
    for(var i =0; i < tweets.length; i++){

      var twitterData = tweets[i].text + "\r\n" + tweets[i].created_at;

      console.log(twitterData);
    }
  });
}


