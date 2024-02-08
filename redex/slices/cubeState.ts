import { createSlice } from '@reduxjs/toolkit'
import { nameColorType, nameTextureType } from './worldState'



export interface CubeState {
  value: {name: nameColorType | nameTextureType, type: "nameColorType" | "nameTextureType"}
}


const initialState: CubeState = {
  value: {name:"dirt",type:"nameTextureType"},
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