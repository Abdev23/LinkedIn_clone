
import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../../Hooks/userSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});