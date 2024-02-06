import { createSlice } from '@reduxjs/toolkit'
import { nameType } from './worldState'



export interface CubeState {
  value: nameType
}


const initialState: CubeState = {
  value: "dirt",
}



export const CubeSlice = createSlice({
  name: 'cube',
  initialState,
  reducers: {
    changeCube: (state,actions) => {
      state.value = actions.payload
      
    },

}})


export const { changeCube } = CubeSlice.actions

export default CubeSlice.reducer