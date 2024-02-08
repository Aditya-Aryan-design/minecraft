"use client"
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import FPV from "./FPV";
import Ground from "./Ground";
import Player from "./Player";
import Cube from "./Cube";
import { useAppSelector,useAppDispatch } from "@/redex/hooks";
import { addAll } from "@/redex/slices/worldState";
import { useCallback, useEffect, memo } from "react";
import Boundry from "./Boundry";





function CanvasElem() {


  const dispatch = useAppDispatch()

  const loadWorld = useCallback(()=>{
    
    const saved = localStorage.getItem("minecraftWorld");
      
      
    if(!saved) return;
    
    let world = JSON.parse(saved)
    
    return dispatch(addAll(world))
  },[])

  
  
  useEffect(()=>{
    loadWorld()
  },[])
  

  const cube = useCallback(()=>useAppSelector(state=>state.world.value),[])


    
  

  return (
    
    <Canvas
      camera={{
        fov:50,
        near:0.1,
        far:142
      }}
    >
        <Sky sunPosition={[100,100,20]}/>
        <ambientLight intensity={2}/>
        <FPV />
        <Physics>
            <Player />
            {
              cube().map((e)=>{
                
                
                return(
                  <Cube key={e.id} pos={e.position} name={e.name}/>
                )
              })
            }
            <Boundry />
            <Ground />
        </Physics>
    </Canvas>

  )
}

export default memo(CanvasElem)
