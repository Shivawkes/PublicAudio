$(document).ready(function() {

// only play music on home page while not logged in
if(window.loggedIn === false) {

// randomly select a track from the array
var path = '../audio/',
files = ['LeVrai.mp3', 'FireDarer.mp3', 'WhatNow.mp3'],
i = Math.floor(Math.random()*files.length);

// play the track
var audio = new Audio(path+files[i]);
audio.play();

// repeat the track
audio.addEventListener('ended', function() {
this.currentTime = 0;
this.play();

}, false);


} //END WINDOW LOGGEDIN

}); //END DOCREADY
