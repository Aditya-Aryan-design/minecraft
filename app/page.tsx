"use client"
import CanvasElem from "@/components/Canvas";
import { useAppDispatch } from "@/redex/hooks";
import { moveForward,moveBackward,moveLeft,moveRight,stop } from "@/redex/slices/playerState";




function page() {

  const dispatch = useAppDispatch()

  return (
    <div className="h-screen w-screen overflow-hidden">

      <div className="h-screen w-screen">
      <CanvasElem />
      </div>

      <div className="z-50 absolute bottom-10 right-10 flex flex-col items-center -space-y-2">
        <button className="radialGradientOrange button" onMouseOut={()=>dispatch(stop())} onMouseEnter={()=>dispatch(moveForward())}></button>
        <div className="space-x-7">
          <button className="radialGradientBlue button" onMouseOut={()=>dispatch(stop())} onMouseEnter={()=>dispatch(moveLeft())}></button>
          <button className="radialGradientBlue button" onMouseOut={()=>dispatch(stop())} onMouseEnter={()=>dispatch(moveRight())}></button>
        </div>
        <button className="radialGradientOrange button" onMouseOut={()=>dispatch(stop())} onMouseEnter={()=>dispatch(moveBackward())}></button>
      </div>

    </div>
  )
}

export default page
