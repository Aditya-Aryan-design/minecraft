import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'



export type nameTextureType = "rmCube" | "dirt" | "floor" | "wood" | "wall" | "grass" | "aditya" | "rock" | "metal" | "roof" | "tile" | "wall1" | "wood1" 
export type nameColorType = "pink" | "blue" | "green" | "red" | "#333" | "yellow" | "#aaa" | "orange"
export type posType = [x:number,y:number,z:number]


export interface WorldState {
  value1: {id:string,name:nameColorType,position:posType,type?:"nameColorType"}[],
  value2: {id:string,name:nameTextureType,position:posType,type?:"nameTextureType"}[],
}


const initialState: WorldState = {
  value1: [],
  value2: [],
}



export const WorldSlice = createSlice({
  name: 'world',
  initialState,
  reducers: {
    addAll: (state, action) => {
      state.value1 = action.payload[0],
      state.value2 = action.payload[1]
    },
    addCube: (state,actions) => {

      if(actions.payload.type === "nameColorType"){

        state.value1.push({
          id: nanoid(),
          name: actions.payload.name,
          position: actions.payload.position

        })
      } else if(actions.payload.type === "nameTextureType"){

        state.value2.push({
          id: nanoid(),
          name: actions.payload.name,
          position: actions.payload.position

        })
      }
      
      
    },
    
    resetWorld: (state)=>{
      state.value1 = [],
      state.value2 = []
    },
    
    removeCube: (state,actions)=>{
      const {position,type} = actions.payload;

      

      let value;

      if(type === "nameColorType"){
        value = state.value1
      } else {
        value = state.value2
      }
      
      let newState:any = [];
      for(let i=0; i<value.length; i++){


        if(value[i].position[0] !== position[0] || value[i].position[1] !== position[1] || value[i].position[2] !== position[2]){
          newState.push(value[i])
        }
        
        

      }
      
      if(type === "nameColorType"){
        state.value1 = newState
      } else {
        state.value2 = newState
      }
      
      
      
    }

}})


export const { addCube,resetWorld,removeCube,addAll } = WorldSlice.actions

export default WorldSlice.reducer