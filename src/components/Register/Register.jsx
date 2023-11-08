
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';

import { auth } from '../../DB/firebase';
import { login } from '../../Hooks/userSlice';
import './Register.css';


const Register = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  /* const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(userAuth => {
        dispatch(
          login(
            {
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoUrl: userAuth.user.photoURL,
            }
          )
        )
      })
      .catch(error => alert(error));
  };
   */
  const register = () => {
    if(!name) {
      return alert('please enter the full name!');
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(
          userAuth.user,
          {
            displayName: name,
            photoURL: profilePic
          }
        )
        .then(() => {
          dispatch(
            login(
              {
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic
              }
            )
          );
        })
      })
      .catch(error => {console.log('error while registering user');alert(error)});
  };

  return (
    <div className='register'>
      <img src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks'
           alt=''
      />

      <form>
        <input value={name}
               onChange={e => setName(e.target.value)}
               placeholder='Full name (required if registering)' 
               type='text'
        />
        <input value={profilePic}
               onChange={e => setProfilePic(e.target.value)}
               placeholder='Profile pc URL (optional)'
               type='text'
        />
        <input value={email}
               onChange={e => setEmail(e.target.value)}
               placeholder='Email'
               type='email'
        />
        <input value={password}
               onChange={e => setPassword(e.target.value)}
               placeholder='Password'
               type='password'
        />
        <button type='submit'
                onClick={register}
        >
          Register
        </button>
      </form>

      <p> Already on LinkedIn?{" "}
        <a className='login__register'
              // onClick={loginToApp}
              href='/login'
        >
          Sign in
        </a>
      </p>
    </div>
  );
}


export default Register;