"use client"
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import FPV from "./FPV";
import Ground from "./Ground";
import Player from "./Player";

function CanvasElem() {
  return (
    
    <Canvas>
        <Sky sunPosition={[100,100,100]}/>
        <ambientLight intensity={0.5}/>
        <FPV />
        <Physics>
            <Player />
            <Ground />
        </Physics>
    </Canvas>

  )
}

export default CanvasElem
