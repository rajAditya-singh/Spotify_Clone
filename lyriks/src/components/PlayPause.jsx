import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ song, handlePause, handlePlay, isPlaying, activeSong }) => (
  isPlaying && activeSong?.title === song.attributes?.title ? (
    <FaPauseCircle
      size={35}
      className="text-gray-100"
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-100"
      onClick={handlePlay}
    />
  )
);

export default PlayPause;
