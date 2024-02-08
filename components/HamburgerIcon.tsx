import { memo, useState } from "react"
import { FaHamburger } from "react-icons/fa"
import TextureBtns from "./TextureBtns"

const HamburgerIcon = () => {

    const [showBtns, setShowBtns] = useState(false)

  return (
    <>
    <button className="Trans button2 absolute top-[3%] left-[5%] font-bold text-white z-50 text-[5vmin]" onClick={()=>setShowBtns(!showBtns)}>
      <FaHamburger />
    </button>
    {showBtns && <TextureBtns setShowBtns={setShowBtns}/>}
    </>
  )
}

export default memo(HamburgerIcon)
