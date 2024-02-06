"use client"
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import FPV from "./FPV";
import Ground from "./Ground";
import Player from "./Player";
import Cube from "./Cube";
import { useAppSelector,useAppDispatch } from "@/redex/hooks";
import { useEffect } from "react";
import { loadWorld } from "@/redex/slices/worldState";
import Boundry from "./Boundry";



function CanvasElem() {


  const dispatch = useAppDispatch()

  const cubes = useAppSelector(state=>state.world.value)

  useEffect(()=>{
    
    dispatch(loadWorld())
    
  },[])

  return (
    
    <Canvas>
        <Sky sunPosition={[100,100,20]}/>
        <ambientLight intensity={2}/>
        <FPV />
        <Physics>
            <Player />
            {
              cubes.map((e)=>{
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

export default CanvasElem
