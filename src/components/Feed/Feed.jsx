
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';
import { collection, serverTimestamp, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

import { db } from '../../DB/firebase';
import { selectUser } from '../../Hooks/userSlice';
import InputOption from '../InputOption/InputOption';
import Post from '../Post/Post';
import './Feed.css';


const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = collection(db, 'posts');
    onSnapshot(
      query(getPosts, orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(snapshot.docs.map(doc => (
          {
            id   :doc.id,
            data :doc.data(),
          }
        ))
        )
      }
    );

  }, []);

  const sendPost = async e => {
    e.preventDefault();

    const docRef = await addDoc(
      collection(db, 'posts'),
      {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || '',
        timestamp: serverTimestamp()
      }
    );

    const postId = docRef.id;
    setInput('');
  }

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input value={input}
                   onChange={e => setInput(e.target.value)}
                   type='text' 
            />
            <button type='submit'
                    onClick={sendPost}
            >
              Send
            </button>
          </form>
        </div>

        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon}
                       title='Photo'
                       color='#70B5F9'
          />
          <InputOption Icon={SubscriptionIcon}
                       title='Video'
                       color='#E7A33E'
          />
          <InputOption Icon={EventNoteIcon}
                       title='Event'
                       color='#C0CBCD'
          />
          <InputOption Icon={CalendarViewDayIcon}
                       title='Write Article'
                       color='#7FC15E'
          />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
      {
        posts.map(
          ({ id,
             data: { name, description, message, photoUrl }
          }) => (
            <Post key={id}
                  name={name}
                  description={description}
                  message={message}
                  photoUrl={photoUrl}
            />
          )
        )
      }
      </FlipMove>

      {/* what de dog doing */}
      <div>
      </div>
      
    </div>
  );
}


export default Feed;