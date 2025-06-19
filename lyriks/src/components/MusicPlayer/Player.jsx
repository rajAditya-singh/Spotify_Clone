/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';

const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }) => {
  const ref = useRef(null);
  const audioSrc = activeSong?.attributes?.previews?.[0]?.url;
  // eslint-disable-next-line no-unused-expressions
  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.play().catch((err) => console.warn('Playback failed', err));
      } else {
        ref.current.pause();
      }
    }
  }, [isPlaying, audioSrc]);

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);
  if (!audioSrc) return null;
  return (
    <audio
      src={audioSrc}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
