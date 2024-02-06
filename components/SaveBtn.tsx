import { useAppSelector } from "@/redex/hooks"

function SaveBtn() {

    const world = useAppSelector(state=>state.world.value)

    const handleSave = ()=>{
        const conf = confirm("Do you want to save the world?")

        if(conf){
            localStorage.setItem("minecraftWorld",JSON.stringify(world))
        }
    }

  return (
    <button className="Trans button absolute top-[3%] right-[30%] font-bold text-white text-[3vmin] z-50" onClick={handleSave}>Save</button>
  )
}

export default SaveBtn
