import React, {useState} from 'react';
import { useSpring, animated } from "react-spring";
import useMusicPlayer from '../hooks/usePlayerProvider';


function Header() {
    const { currentTrackName} =useMusicPlayer();
  return (
    <div className='header'>
        <TextScroller text={currentTrackName}/>
    </div>
  )
}

const TextScroller = ({ text }) => {
    const [key, setKey] = useState(1);
  
    const scrolling = useSpring({
      from: { transform: "translate(50%,0)" },
      to: { transform: "translate(-50%,0)" },
      config: { duration: 3500 },
      reset: true,
      //reverse: key % 2 == 0,
      onRest: () => {
        setKey(key + 1);
      }
    });
  
    return (
      <div key={key}>
        <animated.div style={scrolling}>{text}</animated.div>
      </div>
    );
  };

export default Header