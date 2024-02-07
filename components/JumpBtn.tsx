import { memo } from "react"
import { useAppDispatch } from "@/redex/hooks"
import { jump } from "@/redex/slices/playerState"
import { GiJumpAcross } from "react-icons/gi";

const JumpBtn = () => {

    const dispatch = useAppDispatch()

  return (
    <button className="Trans button2 absolute bottom-[4vh] left-[4vw] font-bold text-white text-[7vmin]" onClick={()=>dispatch(jump())}>
        <GiJumpAcross />
      </button>
  )
}

export default memo(JumpBtn)
