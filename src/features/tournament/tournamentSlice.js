import { createSlice } from '@reduxjs/toolkit';


let initialState = {
    rounds: [
        {
            levelType: "countdown",
            duration: 5,
            smallBlind: "",
            bigBlind: "",
            ante: "",
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 100,
            bigBlind: 200,
            ante: 200,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 200,
            bigBlind: 300,
            ante: 300,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 200,
            bigBlind: 400,
            ante: 400,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 200,
            bigBlind: 500,
            ante: 500,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 500,
            bigBlind: 1000,
            ante: 1000,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 600,
            bigBlind: 1200,
            ante: 1200,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 8000,
            bigBlind: 1600,
            ante: 1600,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 1000,
            bigBlind: 2000,
            ante: 2000,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 1000,
            bigBlind: 2500,
            ante: 2500,
        },
        {
            levelType: "break",
            duration: 5,
            smallBlind: 1500,
            bigBlind: 3000,
            ante: 3000,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 1500,
            bigBlind: 3000,
            ante: 3000,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 2000,
            bigBlind: 4000,
            ante: 4000,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 2500,
            bigBlind: 5000,
            ante: 5000,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 3000,
            bigBlind: 6000,
            ante: 6000,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 4000,
            bigBlind: 8000,
            ante: 8000,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 5000,
            bigBlind: 10000,
            ante: 10000,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 6000,
            bigBlind: 12000,
            ante: 12000,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 8000,
            bigBlind: 16000,
            ante: 16000,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 10000,
            bigBlind: 20000,
            ante: 20000,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 15000,
            bigBlind: 30000,
            ante: 30000,
        },
        {
            levelType: "blindLevel",
            duration: 10,
            smallBlind: 20000,
            bigBlind: 40000,
            ante: 40000,
        },
    ],
    currentRound: 0,
    name: "Falecido Batel"
}


const tournamenteSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
        editLevel(state, action){
            const {levelId, prop, value } = action.payload
            if(value > 0){
                state.rounds[levelId][prop] = value
            }
        },
        setCurrentRound(state, action){
            state.currentRound = action.payload
        },
        addRow(state, action){
            const rowPosition = action.payload + 1
            const newLevel = {
            levelType: "blindLevel",
            duration: 5,
            smallBlind: 0,
            bigBlind: 0,
            ante: 0,
            }
            state.rounds.splice(rowPosition, 0, newLevel)
        },
        removeRow(state, action){
            const rowPosition = action.payload 
            state.rounds.splice(rowPosition, 1)
        },
        insertBreak(state, action){
            const rowPosition = action.payload 
            state.rounds[rowPosition].levelType = "break"
        }
   },
});


export const {editLevel, setCurrentRound, addRow, removeRow, insertBreak} = tournamenteSlice.actions;
export default tournamenteSlice.reducer;