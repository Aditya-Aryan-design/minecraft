import { useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { memo } from "react";


export default memo(()=>{
    const {camera,gl} = useThree();

    return <CameraControls args={[camera,gl.domElement]}/>
})