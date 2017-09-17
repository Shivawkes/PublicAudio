$(document).ready(function() {
  
  if(window.loggedIn === false) {
    
    var trackPath = '../audio/',
        audioFiles = ['LeVrai.mp3', 'Stars.mp3', '.mp3'],
        i = Math.floor(Math.random()*audioFiles.length);
        
    var audio = new Audio(trackPath+audioFiles[i]);
    audio.play();
    
  } else {
    
    audio.pause();
    
  }
});
