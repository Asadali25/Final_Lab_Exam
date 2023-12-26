import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocketsSlice';
import missionsReducer from './missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
