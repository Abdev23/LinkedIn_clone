
import React, { forwardRef } from 'react';
import { Avatar } from '@mui/material';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material';

import InputOption from '../InputOption/InputOption';
import './Post.css';


const Post = forwardRef(
  ({name, description, message, photoUrl}, ref) => {
    return (
      <div className='post'
           ref={ref}
      >
        <div className='post__header'>
          <Avatar src={photoUrl}> {name} </Avatar>
          <div className='post__info'>
            <h2> {name} </h2>
            <p> {description} </p>
          </div>
        </div>

        <div className='post__body'>
          <p> {message} </p>
        </div>

        <div className='post__buttons'>
          <InputOption Icon={ThumbUpAltOutlined}
                      title='Like'
                      color='gray'
          />
          <InputOption Icon={ChatOutlined}
                      title='Comment'
                      color='gray'
          />
          <InputOption Icon={ShareOutlined}
                      title='Share'
                      color='gray'
          />
          <InputOption Icon={SendOutlined}
                      title='Send'
                      color='gray'
          />
        </div>
      </div>
    );
  }
)


export default Post;