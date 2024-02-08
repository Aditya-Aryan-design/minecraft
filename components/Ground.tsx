import { useMemo,memo } from "react"
import { usePlane } from "@react-three/cannon"
import { LoadTexture } from "@/images/textures"
import images from "@/images/images"
import { useAppDispatch,useAppSelector } from "@/redex/hooks"
import { addCube } from "@/redex/slices/worldState"




function Ground() {

    const [ref]:any = usePlane(()=>({
        rotation:[-Math.PI/2,0,0],position:[0,-0.5,0]
    }))

    const grass = useMemo(()=>LoadTexture(images.grass),[])
    grass.repeat.set(100,100)

    const selectedCube = useAppSelector(state=>state.cube.value)

    const dispatch = useAppDispatch()


  return (
    <mesh
      ref={ref}

      onDoubleClick={(e)=>{
        e.stopPropagation()

        const [x,y,z] = Object.values(e.point).map((e)=>{
          return Math.round(e)
        })
        
        dispatch(addCube({name:selectedCube.name,type:selectedCube.type,position:[x,0,z]}))  
        
        
      }}
    
    >
        <planeGeometry attach="geometry" args={[100,100]}/>

        <meshLambertMaterial attach="material" map={grass} bumpMap={grass} bumpScale={10} />
    </mesh>
  )
}

export default memo(Ground)
