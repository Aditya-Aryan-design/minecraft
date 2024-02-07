import { memo } from "react";
import { useAppDispatch } from "@/redex/hooks";
import { moveForward,moveBackward,moveLeft,moveRight,stop } from "@/redex/slices/playerState";


function MoveBtn() {
    const dispatch = useAppDispatch()
  return (
    <div className="z-50 absolute bottom-[2vh] right-[2vw] flex flex-col items-center Trans rounded-full space-y-[0.5vmin]">

        <button className="radialGradientBlue button" onClick={()=>dispatch(moveForward())}>
        </button>
        <div className="flex space-x-[0.5vmin]">

          <button className="radialGradientBlue button" onClick={()=>dispatch(moveLeft())}>
          </button>
          <button className="radialGradientOrange button" onClick={()=>dispatch(stop())}>
          </button>

          <button className="radialGradientBlue button" onClick={()=>dispatch(moveRight())}>
          </button>
        </div>
        <button className="radialGradientBlue button" onClick={()=>dispatch(moveBackward())}>
        </button>
      </div>
  )
}

export default memo(MoveBtn)
