import React from "react";
// import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import PauseRounded from '@mui/icons-material/PauseRounded';
import { IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";
import useMusicPlayer from "../hooks/usePlayerProvider";

function Controller() {
  const {togglePlay,playNextTrack,playPreviousTrack, isPlaying,currentTrackName} = useMusicPlayer();

  const mainIconColor =  '#000' 



  return <div className="controller"><IconButton aria-label="previous song" onClick={()=> playPreviousTrack()} >
            <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
          <IconButton disabled={!currentTrackName}
            aria-label={!isPlaying ? 'play' : 'pause'}
            onClick={() => togglePlay()}
          >
            {!isPlaying ? (
              <PlayArrowRounded
                sx={{ fontSize: '3rem' }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
            )}
          </IconButton>
          <IconButton aria-label="next song" onClick={() => playNextTrack()}>
            <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton></div>;
}

export default Controller;
