import { createSlice } from '@reduxjs/toolkit';

const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    
  },
  reducers: {

  },
});


export const {SetSecondsElapsed, SetMinutesElapsed } = timerSlice.actions;
export default timerSlice.reducer;