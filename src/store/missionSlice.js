import { createSlice } from '@reduxjs/toolkit';

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    setMissions: (state, action) => action.payload,
    joinMission: (state, action) => {
      const { missionId } = action.payload;
      return state.map(mission =>
        mission.id === missionId ? { ...mission, reserved: true } : mission
      );
    },
  },
});

export const { setMissions, joinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
