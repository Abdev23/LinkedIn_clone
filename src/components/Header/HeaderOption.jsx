
import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

import { selectUser } from '../../Hooks/userSlice';
import './Header.css';


const HeaderOption = ({avatar, Icon, title, onClick}) => {

  const user = useSelector(selectUser);

  return (
    <div className='headerOption'
         onClick={onClick}
    >
      { Icon && <Icon className='headerOption__icon' /> }
      {
        avatar && (
                    <Avatar className='headerOption__icon'>
                      {user?.email[0]}
                    </Avatar>
                  )
      }
      <h3 className='headerOption__title'> {title} </h3>
    </div>
  );
};


export default HeaderOption;