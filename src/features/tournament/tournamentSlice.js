import { createSlice } from '@reduxjs/toolkit';


let initialState = {
    rounds: [
        {
            levelType: "countdown",
            duration: 1,
            smallBlind: "",
            bigBlind: "",
            ante: "",
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 100,
            bigBlind: 200,
            ante: 0,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 200,
            bigBlind: 300,
            ante: 300,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 200,
            bigBlind: 400,
            ante: 400,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 100,
            bigBlind: 200,
            ante: 0,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 200,
            bigBlind: 300,
            ante: 300,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 200,
            bigBlind: 400,
            ante: 400,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 100,
            bigBlind: 200,
            ante: 0,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 200,
            bigBlind: 300,
            ante: 300,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 200,
            bigBlind: 400,
            ante: 400,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 100,
            bigBlind: 200,
            ante: 0,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 200,
            bigBlind: 300,
            ante: 300,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 200,
            bigBlind: 400,
            ante: 400,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 100,
            bigBlind: 200,
            ante: 0,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 200,
            bigBlind: 300,
            ante: 300,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 200,
            bigBlind: 400,
            ante: 400,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 100,
            bigBlind: 200,
            ante: 0,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 200,
            bigBlind: 300,
            ante: 300,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 200,
            bigBlind: 400,
            ante: 400,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 100,
            bigBlind: 200,
            ante: 0,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 200,
            bigBlind: 300,
            ante: 300,
        },
        {
            levelType: "blindLevel",
            duration: 2,
            smallBlind: 200,
            bigBlind: 400,
            ante: 400,
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
        }

   },
});


export const {editLevel, setCurrentRound} = tournamenteSlice.actions;
export default tournamenteSlice.reducer;