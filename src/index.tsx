import React, { useState, useEffect, useRef } from 'react';
import Controls from './Controls';
import './styles.css';

interface IProps {
  url: string;
  poster_url: string;
  controls?: string[];
  height?: string;
  width?: string;
  isPlaying: boolean;
  volume: number;
  loop?: boolean;
  markers?: object[];
  timeStart?: number;
  startMuted?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onVolume?: (volume: number) => void;
  onProgress?: (event: Event) => void;
  onDuration?: (duration: number) => void;
  onMarkerClick?: (marker: object) => void;
  startFullscreen?: boolean;
}

const DEFAULT_VOLUME: number = 0.7;

function VideoPlayer(props: IProps) {
    const {
    url,
    poster_url,
    controls = ['play', 'time', 'progress', 'volume', 'full-screen'],
    height = '360px',
    width = '640px',
    isPlaying = false,
    volume = 0.7,
    loop = false,
    markers = [],
    timeStart = 0,
    startMuted = false, // default
    onPlay = () => {},
    onPause = () => {},
    onVolume = () => {},
    onProgress = () => {},
    onDuration = () => {},
    onMarkerClick = () => {},
    //startFullscreen = false // default
  } = props;
  
  const playerEl = useRef<HTMLVideoElement>(null);
  const progressEl = useRef<HTMLProgressElement>(null);
  const volumeEl = useRef<HTMLProgressElement>(null);

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [videoDuration, setVideoDuration] = useState<number>(null);
  const [muted, setMuted] = useState<boolean>(false);
  
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  // handle ESC from full screen
  const exitHandler = () => {
    if (getIsFullScreen()) {
      // entered full-screen mode
      //console.log("exitHandler FULL SCREEN");
      document.body.classList.add('react-video-full-screen');
      setIsFullScreen(true);
    } else {
      // exited full-screen mode
      //console.log("exitHandler *NOT* FULL SCREEN");
      document.body.classList.remove('react-video-full-screen');
      setIsFullScreen(false);
    }
    //handleFullScreenClick()
    //setIsFullScreen(false);
  }

  useEffect(() => {
    //console.log("RVM startFullscreen isFullScreen",startFullscreen,isFullScreen);
    //if (startFullscreen && !isFullScreen) {
    //  handleFullScreenClick();
    //}

    // handle ESC from full screen
    if (document.addEventListener) {
      document.addEventListener('webkitfullscreenchange', exitHandler, false);
      document.addEventListener('mozfullscreenchange', exitHandler, false);
      document.addEventListener('fullscreenchange', exitHandler, false);
      document.addEventListener('MSFullscreenChange', exitHandler, false);
    }
    
    playerEl.current.addEventListener('timeupdate', handleProgress);
    playerEl.current.addEventListener('durationchange', handleDurationLoaded);
    if (timeStart) {
      seekToPlayer();
    }
    if (isPlaying) {
      //playerEl.current.play();
      let promise = playerEl.current.play();
      if (promise !== undefined) {
        promise.then(_ => {
          // Autoplay started!
        }).catch(error => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
          onPause();
        });
      }
    }

    if (startMuted) {
      playerEl.current.defaultMuted = true;
      playerEl.current.muted = true;
      setVolume(0);
    }
    
    return () => {
      playerEl.current.removeEventListener('timeupdate', handleProgress);
      playerEl.current.removeEventListener(
        'durationchange',
        handleDurationLoaded
      );
    };
  }, []);

  useEffect(() => {
    seekToPlayer();
  }, [timeStart]);

  useEffect(() => {
    //isPlaying ? playerEl.current.play() : playerEl.current.pause();
    if (isPlaying) {
      let promise = playerEl.current.play();
      if (promise !== undefined) {
        promise.then(_ => {
          // Autoplay started!
        }).catch(error => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
          onPause();
        });
      }
    } else {
      playerEl.current.pause();
    }
    
  }, [isPlaying]);

  useEffect(() => {
    setVolume(volume);
  }, [volume]);

  const seekToPlayer = () => {
    if (timeStart && playerEl) {
      playerEl.current.currentTime = timeStart;
    }
  };

  const setVolume = (value: number) => {
    playerEl.current.volume = value;
    if (value === 0) {
      setMuted(true);
    }
  };

  const handlePlayerClick = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
  };

  const handleDurationLoaded = (e: Event) => {
    const duration = e.currentTarget['duration'];
    setVideoDuration(duration);
    onDuration(duration);
  };

  const handleProgress = (e: Event) => {
    const { currentTarget } = e;
    const currentTime = currentTarget['currentTime'];
    const duration = currentTarget['duration'];
    if (duration) {
      setCurrentTime(currentTime);
      const percentage = (100 / duration) * currentTime;
      progressEl.current.value = percentage;
      progressEl.current.innerHTML = percentage + '% played';
      if (currentTime === duration) {
        onPause();
      }
    }
    onProgress(e);
  };

  const handleProgressClick = (e: Event) => {
    const x =
      e['clientX'] -
      progressEl.current.getBoundingClientRect().left +
      document.body.scrollLeft;
    const percentage =
      (x * progressEl.current.max) / progressEl.current.offsetWidth;
    playerEl.current.currentTime =
      (percentage / 100) * playerEl.current.duration;
  };

  const handleVolumeClick = (e: Event) => {
    const y =
      volumeEl.current.offsetWidth -
      (e['clientY'] -
        volumeEl.current.getBoundingClientRect().top +
        document.body.scrollTop);
    const percentage =
      (y * volumeEl.current.max) / volumeEl.current.offsetWidth;
    playerEl.current.muted = false;
    onVolume(percentage / 100);
  };

  const handleMuteClick = () => {
    if (muted) {
      playerEl.current.muted = false;
      setVolume(DEFAULT_VOLUME);
      setMuted(false);
    } else {
      playerEl.current.muted = true;
      setVolume(0);
      setMuted(true);
    }
  };

  
  const getIsFullScreen = () => {
    //console.log("RVM getIsFullScreen");
    if (document['fullscreenElement']) {
      //console.log(" YES fullscreenElement");
      return true;
    } else if (document['mozFullScreenElement']) {
      //console.log(" YES mozFullScreenElement");
      return true;
    } else if (document['webkitFullscreenElement']) {
      //console.log(" YES webkitFullscreenElement");
      return true;
    } else if (document['msFullscreenElement']) {
      //console.log(" YES msFullscreenElement");
      return true;
    } else {
      //console.log(" NO")
      return false;
    }
  }
  

  const handleFullScreenClick = () => {
    const videoWrap = document.getElementsByClassName('react-video-wrap')[0];
    // JBB 4/5/2020 - pressing ESC to exit full screen does not toggle isFullScreen
    if (isFullScreen) {
      document.body.classList.remove('react-video-full-screen');
      if (document['exitFullscreen']) {
        document['exitFullscreen']();
      } else if (document['mozCancelFullScreen']) {
        document['mozCancelFullScreen']();
      } else if (document['webkitExitFullscreen']) {
        document['webkitExitFullscreen']();
      } else if (document['msExitFullscreen']) {
        document['msExitFullscreen']();
      }
      setIsFullScreen(false);
    } else {
      document.body.classList.add('react-video-full-screen');
      if (videoWrap['requestFullscreen']) {
        videoWrap['requestFullscreen']();
      } else if (videoWrap['mozRequestFullScreen']) {
        videoWrap['mozRequestFullScreen']();
      } else if (videoWrap['webkitRequestFullscreen']) {
        videoWrap['webkitRequestFullscreen']();
      } else if (videoWrap['msRequestFullscreen']) {
        videoWrap['msRequestFullscreen']();
      }
      setIsFullScreen(true);
    }
    //setIsFullScreen(!isFullScreen);
  };

  const handleMarkerClick = (marker: object) => {
    playerEl.current.currentTime = marker['time'];
    onMarkerClick(marker);
  };

  return (
    <div className="react-video-wrap" style={{ height, width }}>
        <video
          ref={playerEl}
          className="react-video-player"
          loop={loop}
          onClick={handlePlayerClick}
          playsInline
          poster={poster_url}
          src={url}
        >
          <source src={url} type="video/mp4" />
        </video>
      {isFullScreen ? (
        <button className="react-video-close" onClick={handleFullScreenClick}>
          Close video
        </button>
      ) : null}
      {controls.length ? (
        <Controls
          progressEl={progressEl}
          volumeEl={volumeEl}
          controls={controls}
          isPlaying={isPlaying}
          volume={volume}
          currentTime={currentTime}
          duration={videoDuration}
          muted={muted}
          markers={markers}
          onPlayClick={onPlay}
          onPauseClick={onPause}
          onProgressClick={handleProgressClick}
          onVolumeClick={handleVolumeClick}
          onMuteClick={handleMuteClick}
          onFullScreenClick={handleFullScreenClick}
          onMarkerClick={handleMarkerClick}
        />
      ) : null}
    </div>
  );
}

export default VideoPlayer;
