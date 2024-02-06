import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'


export type nameType = "rmCube" | "dirt" | "glass" | "wood" | "wall" | "grass"
export type posType = [x:number,y:number,z:number]


export interface WorldState {
  value: {id:string,name:nameType,position:posType}[]
}


const initialState: WorldState = {
  value: [],
}



export const WorldSlice = createSlice({
  name: 'world',
  initialState,
  reducers: {
    loadWorld: (state)=>{
      const saved = localStorage.getItem("minecraftWorld");

      if(!saved) return;
  
      let world = JSON.parse(saved)
  
      state.value = world
    },

    addCube: (state,actions) => {
      state.value.push({
        id: nanoid(),
        name: actions.payload.name,
        position: actions.payload.position
      })
      
    },

    resetWorld: (state)=>{
      state.value = []
    },

    removeCube: (state,actions)=>{
      const {position} = actions.payload
      state.value= state.value.filter(e=>{
        return e.position[0] !== position[0] && e.position[1] !== position[1] && e.position[2] !== position[2]
      })
    }

}})


export const { loadWorld,addCube,resetWorld,removeCube } = WorldSlice.actions

export default WorldSlice.reducer