
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';

import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './pages/Home/Home';
import './App.css';


const Layout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


export default App;