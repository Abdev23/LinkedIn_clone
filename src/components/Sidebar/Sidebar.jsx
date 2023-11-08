
import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

import { selectUser } from '../../Hooks/userSlice';
import './Sidebar.css';


const Sidebar = () => {

  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'> # </span>
      <p> {topic} </p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='https://c4.wallpaperflare.com/wallpaper/587/550/452/firewatch-video-game-art-minimalism-simple-hd-wallpaper-preview.jpg'
             alt=''
        />
        <Avatar className='sidebar__avatar' 
                src={user.photoUrl}
        >
          { user.email[0] }
        </Avatar>
        <h2> { user.displayName } </h2>
        <h4> { user.email } </h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p> Who viewed you </p>
          <p className='sidebar__statNumber'> 2,543 </p>
        </div>
        <div className='sidebar__stat'>
          <p> Views on post </p>
          <p className='sidebar__statNumber'> 2,448 </p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p> Recent </p>
        { recentItem('expressjs') }
        { recentItem('reactjs') }
        { recentItem('software engineering') }
        { recentItem('game-dev') }
        { recentItem('gaming') }
      </div>
    </div>
  );
}


export default Sidebar;