
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../DB/firebase';
import { login } from '../../Hooks/userSlice';
import hero_img from '../../assets/hero_img.svg';
import './Main.css';


const Main = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const loginToApp = (e) => {
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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  }

  return (
    <main>
      <section className='container flex registration-container' id='registration-page'>
        <div className='registration-section'>
          <h1>Welcome to your professional community</h1>
          <form>
            <div className='input-section'>
              <div className='email-box'>
                <label>Email or Phone</label>
                <div className='email-input-box flex'>
                  <input value={email}
                         onChange={e => setEmail(e.target.value)}
                         type='email'
                  />
                </div>
              </div>
              <div className='password-box'>
                <label>Password</label>
                <div className='password-input-box flex'>
                  <input value={password}
                         onChange={e => setPassword(e.target.value)}
                         type={isPasswordVisible ? 'text' : 'password'}
                  />
                  <p onClick={togglePasswordVisibility}> {isPasswordVisible ? 'Hide' : 'Show'} </p>
                </div>
              </div>
              <a className='forget-password' href='#'>Forget password?</a>
            </div>
            <div className='button-section'>
              <a onClick={loginToApp} className='blue-button sign-in-btn'>Sign in</a>
              <p className='btn-division-or'><span>or</span></p>
              <a href='#' className='grey-border-button flex google-sign-in-btn'>
                <FcGoogle />
                <span>Sign in with Google</span>
              </a>
              <a href='/register' className='grey-border-button new-user-sign-up-btn'>New to LinkedIn? Join now</a>
            </div>
          </form>
        </div>
        <img className='registration-image' src={hero_img} alt='alt' />
      </section>
    </main>
  );
}


export default Main;