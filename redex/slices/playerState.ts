import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PlayerState {
  value: "jump"|"moveForward"|"moveBackward"|"moveLeft"|"moveRight"|"stop"
}

const initialState: PlayerState = {
  value: "stop",
}

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
    }
}})


export const { moveForward,moveBackward,moveLeft,moveRight,stop } = playerSlice.actions

export default playerSlice.reducer