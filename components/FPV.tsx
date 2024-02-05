import { useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";


export default ()=>{
    const {camera,gl} = useThree();

    return <CameraControls args={[camera,gl.domElement]}/>
}