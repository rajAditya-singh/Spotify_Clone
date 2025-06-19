import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ song, handlePause, handlePlay, isPlaying, activeSong }) => {
  const activeTitle = activeSong?.attributes?.name;
  const currentTitle = song?.attributes?.name;

  return (
    isPlaying && activeTitle === currentTitle ? (
      <FaPauseCircle
        size={35}
        className="text-gray-100 cursor-pointer"
        onClick={handlePause}
      />
    ) : (
      <FaPlayCircle
        size={35}
        className="text-gray-100 cursor-pointer"
        onClick={handlePlay}
      />
    )
  );
};

export default PlayPause;
