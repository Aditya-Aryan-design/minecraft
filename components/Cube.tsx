import { LoadTexture } from "@/images/textures"
import images from "@/images/images"
import { useBox } from "@react-three/cannon";
import { nameType,posType } from "@/redex/slices/worldState";
import { useAppDispatch,useAppSelector } from "@/redex/hooks";
import { addCube,removeCube } from "@/redex/slices/worldState";


const Cube = ({pos,name}:{pos:posType,name: nameType}) => {



  if(name === "rmCube") return


  let texture = LoadTexture(images[name]);
    texture.repeat.set(1,1)



    const [ref]:any = useBox(()=>({
        type: "Static",
        position: pos
    }))

    const dispatch = useAppDispatch()
    const activeCube = useAppSelector(state=>state.cube.value)


  return (

    <mesh
      ref={ref}

      onDoubleClick={(e)=>{
        e.stopPropagation()
      
        const faceIndex = e.faceIndex;

        if(faceIndex){
          let face = Math.floor(faceIndex/2);
          const {x,y,z} = ref.current.position
          
          if(activeCube === "rmCube"){

            return dispatch(removeCube({position: [x,y,z]}))
          }

          if(face === 0){
            dispatch(addCube({name:activeCube, position: [x+1,y,z]}))
          } else if(face === 1){
            dispatch(addCube({name:activeCube, position: [x-1,y,z]}))
          } else if(face === 2){
            dispatch(addCube({name:activeCube, position: [x,y+1,z]}))
          } else if(face === 4){
            dispatch(addCube({name:activeCube, position: [x,y,z+1]}))
          } else if(face === 5){
            dispatch(addCube({name:activeCube, position: [x,y,z-1]}))
          }
          
        }
        
      }}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>

  )
}

export default Cube
