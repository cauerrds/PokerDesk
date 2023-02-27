import { createSlice } from '@reduxjs/toolkit';

const sliderSlicer = createSlice({
  name: 'timer',
  initialState: {
    pages: 0,
    activePage: 0
  },
  reducers: {
        setPages(state, action){
            state.pages = action.payload
        },
        setActivePage(state, action){
            state.activePage = action.payload
        }
  },
});


export const {setPages,setActivePage} = sliderSlicer.actions;
export default sliderSlicer.reducer;