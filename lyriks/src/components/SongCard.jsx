/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/self-closing-comp */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i, activeSong, isPlaying, data }) => {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.attributes?.name ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img
          alt="song_img"
          src={song.attributes?.artwork?.url?.replace('{w}x{h}', '250x250') || 'https://via.placeholder.com/250'}
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song.id}`}>
            {song.attributes?.name || 'Unknown Title'}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.relationships?.artists?.data?.[0]?.id ? `/artists/${song.relationships.artists.data[0].id}` : '/top-artists'}>
            {song.attributes?.artistName || 'Unknown Artist'}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
