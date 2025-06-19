import React from 'react';
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from 'react-icons/bs';

const VolumeBar = ({ value, min, max, onChange, setVolume }) => {
  // Clamp the volume value between min and max
  const safeValue = Math.min(Math.max(value, min), max);

  // Determine which icon to render
  let VolumeIcon;
  if (safeValue > 0.5) {
    VolumeIcon = (
      <BsFillVolumeUpFill
        size={25}
        color="#FFF"
        onClick={() => setVolume(0)}
        title="Mute"
        className="cursor-pointer"
      />
    );
  } else if (safeValue > 0) {
    VolumeIcon = (
      <BsVolumeDownFill
        size={25}
        color="#FFF"
        onClick={() => setVolume(0)}
        title="Mute"
        className="cursor-pointer"
      />
    );
  } else {
    VolumeIcon = (
      <BsFillVolumeMuteFill
        size={25}
        color="#FFF"
        onClick={() => setVolume(1)}
        title="Unmute"
        className="cursor-pointer"
      />
    );
  }

  return (
    <div className="hidden lg:flex flex-1 items-center justify-end">
      {VolumeIcon}
      <input
        type="range"
        step="any"
        value={safeValue}
        min={min}
        max={max}
        onChange={onChange}
        className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
      />
    </div>
  );
};

export default VolumeBar;
