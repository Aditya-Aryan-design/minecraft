import { createSlice } from '@reduxjs/toolkit'



export interface PlayerState {
  value: "jump"|"moveForward"|"moveBackward"|"moveLeft"|"moveRight"|"stop"
}
type stateType = "jump"|"moveForward"|"moveBackward"|"moveLeft"|"moveRight"|"stop"

const initialState: PlayerState = {
  value: "stop",
}

let prev:stateType = "stop"

export const playerSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    moveForward: (state) => {
      state.value = "moveForward"
      
    },

    moveBackward: (state) =>{
      state.value = "moveBackward"
    },

    moveLeft: (state) => {
      state.value = "moveLeft"
    },

    moveRight: (state) =>{
      state.value = "moveRight"
    },

    stop: (state)=>{
      state.value = "stop"
    },

    jump: (state)=>{
      prev = state.value
      state.value = "jump";
    },

    prevstate: (state)=>{
      state.value = prev;
      prev = "stop"
    }
}})


export const { moveForward,moveBackward,moveLeft,moveRight,stop,jump,prevstate } = playerSlice.actions

export default playerSlice.reducer