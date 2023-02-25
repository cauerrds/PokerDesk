import { configureStore } from '@reduxjs/toolkit'
import timerSlice from '../features/timer/timerSlice'
import tournamentSlice from '../features/tournament/tournamentSlice'


export const store = configureStore({
  reducer: {
    timer: timerSlice,
    tournament: tournamentSlice
  },
})