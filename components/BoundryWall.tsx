import { LoadTexture } from "@/images/textures"
import { usePlane } from "@react-three/cannon"
import images from "@/images/images"
import { memo,useMemo } from "react"

function BoundryWall({pos,rot}:{
    pos:[x:number,y:number,z:number],
    rot:[x:number,y:number,z:number],
}) {

    const wood = useMemo(()=>LoadTexture(images.wood),[])
    wood.repeat.set(50,10)

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

export default memo(BoundryWall)
