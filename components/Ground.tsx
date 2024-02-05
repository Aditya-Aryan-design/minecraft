import { usePlane } from "@react-three/cannon"
import { TextureLoader } from "three"
import images from "@/images/images"
import { NearestFilter, RepeatWrapping } from "three"



function Ground() {

    const [ref]:any = usePlane(()=>({
        rotation:[-Math.PI/2,0,0],position:[0,0,0]
    }))

    const grassTexture = new TextureLoader().load(images.wood);

    grassTexture.magFilter = NearestFilter
    grassTexture.wrapS = RepeatWrapping;
    grassTexture.wrapT = RepeatWrapping;
    grassTexture.repeat.set(50,50)


  return (
    <mesh ref={ref}>
        <planeGeometry attach="geometry" args={[100,100]}/>

        <meshStandardMaterial attach="material" map={grassTexture} />
    </mesh>
  )
}

export default Ground
