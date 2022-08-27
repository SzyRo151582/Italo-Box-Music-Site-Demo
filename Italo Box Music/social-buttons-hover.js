var twitter = document.getElementById("twitter");
var facebook = document.getElementById("facebook");

twitter.addEventListener('mouseover', function () { twitterActive() } );
twitter.addEventListener('mouseout', function () { twitterInactive() } );

facebook.addEventListener('mouseover', function () { facebookActive() } );
facebook.addEventListener('mouseout', function () { facebookInactive() } );

function twitterActive() {
    twitter.classList.add("icon-twitter-a");
    twitter.classList.remove("icon-twitter");
}

function twitterInactive() {
    twitter.classList.remove("icon-twitter-a");
    twitter.classList.add("icon-twitter");
}

function facebookActive() {
    facebook.classList.add("icon-facebook-a");
    facebook.classList.remove("icon-facebook");
}

function facebookInactive() {
    facebook.classList.remove("icon-facebook-a");
    facebook.classList.add("icon-facebook");
}