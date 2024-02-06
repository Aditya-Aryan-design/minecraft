import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './slices/playerState'
import cubeReducer from './slices/cubeState'
import worldReducer from './slices/worldState'

export const store = configureStore({
  reducer: {
    player: playerReducer,
    world: worldReducer,
    cube: cubeReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

