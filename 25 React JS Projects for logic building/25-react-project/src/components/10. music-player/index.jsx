import { useEffect, useRef, useState } from "react";
import './music.css'



const MusicPlayer = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentMusicTrack, setCurrentMusicTrack] = useState(0)
  const [trackProgress, setTrackProgress] = useState(0)


  const tracks = [
    {
      title: "Track 1",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Track 2",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      image: "https://via.placeholder.com/150",
    },
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTrackProgress((audioRef.current.currentTime / audioRef.current.duration) * 100)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  function handlePlayAndPause() {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }
  function handleSkipTrack(direction) {
    if (direction === 'forward') {
      setCurrentMusicTrack(prevTrack => (prevTrack + 1) % tracks.length)
  
    } else if (direction === 'backward') {
      setCurrentMusicTrack(prevTrack => (prevTrack - 1 + tracks.length) % tracks.length)
    }
    setTrackProgress(0)
    setIsPlaying(false)
  }

  return (
    <div className="music-player">
      <h2>Music Player</h2>
      <h3>{tracks[currentMusicTrack].title}</h3>
      <img src={tracks[currentMusicTrack].image} alt={tracks[currentMusicTrack].title} />
      <audio ref={audioRef} src={tracks[currentMusicTrack].source}></audio>
      <div className="progress-bar">
        <div className="progress" style={{  
          width: `${trackProgress}%`,
          background: isPlaying ? '#3498db' : '#a43636',
          height: '15px'}}>
        </div>
      </div>
      <div className="track-controls">
        <button onClick={() => handleSkipTrack('backward')}>Prev</button>
        <button onClick={handlePlayAndPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={() => handleSkipTrack('forward')}>Next</button>
      </div>
    </div>
  );
};

export default MusicPlayer;