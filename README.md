# PublicAudio
A Qvitter plugin designed to randomly select then play an audio track while viewing<br />
the timeline on the login page.

Music courtesy of: <br />
http://freemusicarchive.org/music/sawsquarenoise/ <br />
http://freemusicarchive.org/music/Brakhage/ <br />
http://freemusicarchive.org/music/Bryan_Divisions/

Installation
============
<ul>
<li>Add "addPlugin('PublicAudio');"</li>
<li>to the bottom of your config.php</li>
<li>Create an "audio" directory at the / of the GS instance.</li>
<li>Place desired .mp3 files in that directory.</li>
<li>Add the file names to the "audioFiles" array in playTrack.js <br />
    Example: <br />
    files = ['fileName.mp3', 'fileName1.mp3', 'fileName2.mp3'],</li>
</ul>
