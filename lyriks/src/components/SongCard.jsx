/* eslint-disable react/self-closing-comp */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i }) => {
  const dispatch = useDispatch();
  const activeSong = 'Test'; 

  const { attributes } = song;
  if (!attributes) return null; 

  const { name, artistName, artwork } = attributes;

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === name ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause />
        </div>
        <img
          alt="song_img"
          src={artwork?.url?.replace('{w}x{h}', '250x250') || 'https://via.placeholder.com/250'}
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default SongCard;
