import { configureStore } from '@reduxjs/toolkit'
import sliderSlice from '../features/Slider/sliderSlice'
import timerSlice from '../features/timer/timerSlice'
import tournamentSlice from '../features/tournament/tournamentSlice'


export const store = configureStore({
  reducer: {
    timer: timerSlice,
    tournament: tournamentSlice,
    slider: sliderSlice
  },
})