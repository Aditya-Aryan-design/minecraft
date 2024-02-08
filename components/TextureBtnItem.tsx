import { memo } from "react"
import images from "@/images/images"
import Image from "next/image"
import { useAppDispatch,useAppSelector } from "@/redex/hooks"
import { changeCube } from "@/redex/slices/cubeState"
import { nameTextureType } from "@/redex/slices/worldState"


const TextureBtnItem = ({img,cube}:{img:nameTextureType,cube:string}) => {

    if(img === "rmCube") return

    const dispatch = useAppDispatch()


  return (
    <button className={`rounded-full overflow-hidden border-[0.5vmin] ${cube !== img?'border-zinc-600':"border-white"} cursor-pointer`} onClick={()=>{
            
        dispatch(changeCube({name:img,type:"nameTextureType"}))
        }} >
        <Image className="h-[6vmin] w-[6vmin]" src={images[img]} height={50} width={50} alt={img}/>
    </button>
  )
}

export default memo(TextureBtnItem)
