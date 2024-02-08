import { memo } from "react";
import { useBox } from "@react-three/cannon";
import { nameColorType,posType } from "@/redex/slices/worldState";
import { useAppDispatch,useAppSelector } from "@/redex/hooks";
import { addCube,removeCube } from "@/redex/slices/worldState";


const CubeColor = ({pos,name}:{pos:posType,name: nameColorType}) => {






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
          

          if(activeCube.name === "rmCube"){
            
            return dispatch(removeCube({position: [x,y,z],type: "nameColorType"}))
          }


          const {name,type} = activeCube



          if(face === 0){
            dispatch(addCube({name, type, position: [x+1,y,z]}))
          } 
          
          else if(face === 1){
            dispatch(addCube({name, type, position: [x-1,y,z]}))
          } 
          
          else if(face === 2){
            dispatch(addCube({name, type, position: [x,y+1,z]}))
          }

          else if(face === 3){
            dispatch(addCube({name, type, position: [x,y-1,z]}))
          }
        
          else if(face === 4){
            dispatch(addCube({name, type, position: [x,y,z+1]}))
          }
          
          else if(face === 5){
            dispatch(addCube({name, type, position: [x,y,z-1]}))
          }
          
        }
        
      }}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color={name} metalness={-1}/>
    </mesh>

  )
}

export default memo(CubeColor)
