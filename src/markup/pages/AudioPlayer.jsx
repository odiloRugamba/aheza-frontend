import React, { useState, useRef, useEffect } from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"
// import { FaAnglesRight } from "react-icons/fa"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"

const AudioPlayer = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  }

  const forwardThirty = () => {
    console.log(progressBar.current.value)
    console.log(Number(progressBar.current.value + 30))
    progressBar.current.value = progressBar.current.value + 30;
    console.log(progressBar.current.value)
    changeRange();
  }

  return (
    <div className="audioPlayer">
      <div className='audioPlayer'>
        <div className='playBg'></div>
        <div className='audioplayerBtnCont'>
          <button className="forwardBackward" onClick={backThirty}><FaAngleDoubleLeft /></button>
          <button onClick={togglePlayPause} className="playPause">
            {isPlaying ? <FaPause /> : <FaPlay className="play" />}
          </button>
          <button className="forwardBackward" onClick={forwardThirty}> <FaAngleDoubleRight /></button>
          <div className='currentCont'>
            <div className="currentTime">{calculateTime(currentTime)}</div>

            <div style={{ width: 500, marginTop: 5, }}>
              <input type="range" style={{ width: 500, position: "absolute" }} defaultValue="0" ref={progressBar} onChange={changeRange} />
            </div>

            <div className="duration">{duration ? (duration && !isNaN(duration)) && calculateTime(duration) : '00:00'}</div>
          </div>


        </div>
      </div>

    </div>
  )
}

export { AudioPlayer }
