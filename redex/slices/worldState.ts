import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'



export type nameType = "rmCube" | "dirt" | "glass" | "wood" | "wall" | "grass" | "aditya"
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
    addAll: (state, action) => {
      state.value = action.payload
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
      const {position} = actions.payload;

      let {value} = state
      
      let newState:any = [];
      for(let i=0; i<value.length; i++){

        if(value[i].position[0] !== position[0] || value[i].position[1] !== position[1] || value[i].position[2] !== position[2]){
          newState.push(value[i])
        }
        
        

      }
      state.value = newState
      
      
      
    }

}})


export const { addCube,resetWorld,removeCube,addAll } = WorldSlice.actions

export default WorldSlice.reducer