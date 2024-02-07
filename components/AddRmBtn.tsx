import { useAppDispatch } from "@/redex/hooks"
import {changeCube} from "@/redex/slices/cubeState"
import { AiFillDelete } from "react-icons/ai";
import { memo } from "react"

function RmBtn() {

  const dispatch = useAppDispatch()

  return (
        <button className="Trans button2 absolute font-bold text-white text-[7vmin] z-50 top-[20%] right-[5%]" onClick={()=>dispatch(changeCube("rmCube"))} ><AiFillDelete /></button>

  )
}

export default memo(RmBtn)
