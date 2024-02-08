"use client"
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import FPV from "./FPV";
import Ground from "./Ground";
import Player from "./Player";
import CubeTexture from "./CubeTexture";
import CubeColor from "./CubeColor";
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
    
    if(!world[0] || !world[1]) return
    
    return dispatch(addAll(world))
  },[])

  
  
  useEffect(()=>{
    loadWorld()
  },[])
  

  const cubeColor = useAppSelector(state=>state.world.value1)
  const cubeTexture = useAppSelector(state=>state.world.value2)
  

  return (
    
    <Canvas
      camera={{
        fov:50,
        near:0.1,
        far:142
      }}
    >
        <Sky sunPosition={[100,100,20]}/>
        <ambientLight intensity={1}/>
        <directionalLight intensity={2} color="#ffffaa" position={[100,100,20]}/>
        <FPV />
        <Physics>
            <Player />
            {
              cubeColor.map((e)=>{
                return(
                  <CubeColor key={e.id} pos={e.position} name={e.name} />
                )
              })
            }
            {
              cubeTexture.map((e)=>{
                
                
                return(
                  <CubeTexture key={e.id} pos={e.position} name={e.name}/>
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
