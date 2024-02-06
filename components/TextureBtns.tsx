import images from "@/images/images"
import Image from "next/image"
import { useAppDispatch,useAppSelector } from "@/redex/hooks"
import { changeCube } from "@/redex/slices/cubeState"

const TextureBtns = () => {

    const cube = useAppSelector(state=>state.cube.value)
    const dispatch = useAppDispatch()

  return (
    <div className='flex flex-col absolute top-[2vh] left-[2vw] space-y-[2vh] z-50'>

        <button className={`rounded-full overflow-hidden border-[0.5vmin] ${cube !== "dirt"?'border-zinc-600':"border-white"} cursor-pointer`} onClick={()=>dispatch(changeCube("dirt"))} >
            <Image className="h-[6vmin] w-[6vmin]" src={images.dirt} height={50} width={50} alt="dirt"/>
        </button>

        <button className={`rounded-full overflow-hidden border-[0.5vmin] ${cube !== "glass"?'border-zinc-600':"border-white"} cursor-pointer`} onClick={()=>dispatch(changeCube("glass"))}>
            <Image className="h-[6vmin] w-[6vmin]" src={images.glass} height={50} width={50} alt="glass"/>
        </button>

        <button className={`rounded-full overflow-hidden border-[0.5vmin] ${cube !== "grass"?'border-zinc-600':"border-white"} cursor-pointer`} onClick={()=>dispatch(changeCube("grass"))}>
            <Image className="h-[6vmin] w-[6vmin]" src={images.grass} height={50} width={50} alt="grass"/>
        </button>

        <button className={`rounded-full overflow-hidden border-[0.5vmin] ${cube !== "wall"?'border-zinc-600':"border-white"} cursor-pointer`} onClick={()=>dispatch(changeCube("wall"))}>
            <Image className="h-[6vmin] w-[6vmin]" src={images.wall} height={50} width={50} alt="wall"/>
        </button>

        <button className={`rounded-full overflow-hidden border-[0.5vmin] ${cube !== "wood"?'border-zinc-600':"border-white"} cursor-pointer`} onClick={()=>dispatch(changeCube("wood"))}>
            <Image className="h-[6vmin] w-[6vmin]" src={images.wood} height={50} width={50} alt="wood"/>
        </button>
    </div>
  )
}

export default TextureBtns
