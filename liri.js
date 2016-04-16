var fs = require("fs");
var twitterKeysJs = ("./keys.js");
var Twitter = require('twitter');
var spotify = require('spotify');
var movie = require('movie');
var doWhatItSays = require('doWhatItSays')
var request = require('request');
var params = process.argv.slice(2);


function getTwitter(){
var client = new Twitter({
  consumer_key: 'OimzzsPjuNdGaXy2cvoH1ltXR',
  consumer_secret: 'q5ijNAbGg6PNcLEfmjScBzsLevXTUuYaotPOJc9yNFAgRtXPpE',
  access_token_key: '719953801315278849-vCsaOA5jOQIHcJBUeAdU1IodkXJVpGv',
  access_token_secret: 'fO1XdvLKSbDco4w5yjOkam5fohv5kLuEjNLLEnDAu3YS4',
});

var params = {screen_name: 'pauljin4444'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});
}

function getSpotify(){
var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});
}