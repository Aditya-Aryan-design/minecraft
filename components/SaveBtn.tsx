import { useAppSelector } from "@/redex/hooks"
import { memo } from "react"
import { FaSave } from "react-icons/fa";


function SaveBtn() {

    const world = useAppSelector(state=>[state.world.value1,state.world.value2])

    const handleSave = ()=>{
        const conf = confirm("Do you want to save the world?")

        if(conf){
            localStorage.setItem("minecraftWorld",JSON.stringify(world))
            console.log(localStorage.getItem("minecraftWorld"));
            
        }
    }

  return (
    <button className="Trans button absolute top-[3%] right-[30%] font-bold text-white z-50 text-[5vmin]" onClick={handleSave}><FaSave /></button>
  )
}

export default memo(SaveBtn)
