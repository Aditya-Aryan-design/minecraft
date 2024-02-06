"use client"
import CanvasElem from "@/components/Canvas";
import MoveBtn from "@/components/MoveBtn";
import JumpBtn from "@/components/JumpBtn";
import ResetBtn from "@/components/ResetBtn";
import TextureBtns from "@/components/TextureBtns";
import AddRmBtn from "@/components/AddRmBtn";
import SaveBtn from "@/components/SaveBtn";






function page() {

  


  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center">

      <AddRmBtn />
      <TextureBtns />
      <ResetBtn />
      <SaveBtn />

      <div className="h-screen w-screen absolute top-0 left-0">
      <CanvasElem />
      </div>

      <MoveBtn />
      <JumpBtn />

    </div>
  )
}

export default page
