import { useAppDispatch } from "@/redex/hooks"
import { jump } from "@/redex/slices/playerState"

const JumpBtn = () => {

    const dispatch = useAppDispatch()

  return (
    <button className="Trans button2 absolute bottom-[4vh] left-[4vw] font-bold text-white text-[3vmin]" onClick={()=>dispatch(jump())}>
        Jump
      </button>
  )
}

export default JumpBtn
