/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import {useEffect} from 'react';

import useSound from 'use-sound';

export function Sounds({vibe, clickLight, clickCount, clickPoint}) {
  const [playActive] = useSound('/click.mp3', {volume: 0.25});
  const [playSega] = useSound('/sega.mp3', {volume: 1});


  useEffect(() => {
    playActive();
  }, [clickLight, clickCount, playActive]);

  useEffect(() => {
    if (clickPoint && clickPoint !== 'Light_Control_Box' && clickPoint !== 'Music_Control_Box') {
      playActive();
    }
    if (vibe == 0 && clickPoint == 'Cube009_2') {
      playSega();
    }
  }, [clickPoint, playActive, playSega, vibe]);

  return null;
}
