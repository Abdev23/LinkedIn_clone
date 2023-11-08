
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { auth } from '../../DB/firebase';
import { login, logout, selectUser } from '../../Hooks/userSlice';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Widgets from '../../components/Widgets/Widgets';
import Login from '../../components/Login/Login';
import Main from '../../components/Main/Main';
import './Home.css';


const Home = () => {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        // user is logged in
        dispatch(
          login(
            {
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoUrl: userAuth.photoURL,
            }
          )
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className='home'>
    {
      !user ? <Main /> : (
        <div className='app__body'>
          <Sidebar />        
          <Feed />
          <Widgets />
        </div>
      )
    }
    </div>
  )
}


export default Home;