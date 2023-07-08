import useMusicPlayer from "../hooks/usePlayerProvider";
import { IconButton } from "@mui/material";
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import Paper from '@mui/material/Paper';

const mainIconColor = "#000";
function TrackList() {
  const { trackList,  playTrack, isPlaying, currentTrackIndex  } =
    useMusicPlayer();
  return (
    <>

      {trackList.map((track, index) => (
        <div key={index} className="strack-btn">
          <Paper elevation={8} sx={{width:"260px",display:"flex",alignItems:"center"}} >

        <IconButton aria-label="previous song" onClick={()=> playTrack(index)} >
        {currentTrackIndex === index && isPlaying ? 
           (
             <HeadphonesOutlinedIcon sx={{ fontSize: '2rem' }} htmlColor={mainIconColor} />
             ) : (
               <PauseCircleOutlineOutlinedIcon
               sx={{ fontSize: '2rem' }}
               htmlColor={mainIconColor}
               />
               )}
      </IconButton>
          {track.name}
               </Paper>
        </div>
      ))}
      
    </>
  );
}

export default TrackList;
