import { useAppDispatch } from "@/redex/hooks"
import {changeCube} from "@/redex/slices/cubeState"

function RmBtn() {

  const dispatch = useAppDispatch()

  return (
        <button className="Trans button2 absolute font-bold text-white text-[3vmin] z-50 top-[20%] right-[5%]" onClick={()=>dispatch(changeCube("rmCube"))} >Delete</button>

  )
}

export default RmBtn
