import { LoadTexture } from "@/images/textures"
import { usePlane } from "@react-three/cannon"
import images from "@/images/images"

function BoundryWall({pos,rot}:{
    pos:[x:number,y:number,z:number],
    rot:[x:number,y:number,z:number],
}) {

    const wood = LoadTexture(images.wood)
    wood.repeat.set(20,2)

    const [ref]:any = usePlane(()=>({
        rotation:rot,position:pos
    }))

  return (
    <mesh ref={ref}>
        <planeGeometry attach="geometry" args={[100,10]}/>

        <meshStandardMaterial attach="material" map={wood} />
    </mesh>
  )
}

export default BoundryWall