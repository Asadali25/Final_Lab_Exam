import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    setRockets: (state, action) => action.payload,
    reserveRocket: (state, action) => {
      const { rocketId } = action.payload;
      return state.map(rocket =>
        rocket.id === rocketId ? { ...rocket, reserved: true } : rocket
      );
    },
  },
});

export const { setRockets, reserveRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
