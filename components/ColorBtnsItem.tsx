import { useAppDispatch } from "@/redex/hooks"
import { changeCube } from "@/redex/slices/cubeState"
import { nameColorType } from "@/redex/slices/worldState"
import { memo } from "react"

const ColorBtns = ({color,cube}:{color:nameColorType,cube:string}) => {
    const dispatch = useAppDispatch()
  return (
    <button className={`rounded-full overflow-hidden border-[0.5vmin] h-[6vmin] w-[6vmin] ${cube !== color?'border-zinc-600':"border-white"} cursor-pointer`} onClick={()=>{
            
        dispatch(changeCube({name:color,type:"nameColorType"}))
        }} 
        
    style={{background:color}}
    >
        
    </button>
  )
}

export default memo(ColorBtns)
