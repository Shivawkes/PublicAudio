<?php
if (!defined('GNUSOCIAL'))
{
  exit(1);
}

class PublicAudioPlugin extends Plugin
{
  function onQvitterEndShowScripts(Action $action)
    {
      $action->script(Plugin::staticPath('PublicAudio', '').'js/playTrack.js');
    }
  function onPluginVersion(array &$versions)
    {
      $versions[] = array('name' => 'PublicAudio',
                          'author' => 'HeathCliff',
                          'rawdescription' => _m('A plugin to play mp3 files when viewing the timeline on the login page.'));
      return true;
    }
}
