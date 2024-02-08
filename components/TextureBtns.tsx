import { SetStateAction, memo } from "react"
import TextureBtnItem from "./TextureBtnItem"
import ColorBtnItem from "./ColorBtnsItem"
import { useAppSelector } from "@/redex/hooks"
import { nameColorType, nameTextureType } from "@/redex/slices/worldState"

const TextureBtns = ({setShowBtns}:{setShowBtns:SetStateAction<any>}) => {

    const active = useAppSelector(state=>state.cube.value)

    
    const btns1:nameTextureType[] = ["dirt","floor","wood","wall","grass","aditya","rock","metal","roof","tile","wall1","wood1"]


    const btns2:nameColorType[] = ["green","red","#333","yellow","#aaa","orange"
    ]
    
    

  return (
    <div className='flex flex-wrap top-[25%] left-[25%] z-50 h-[50%] w-[50%] Trans space-x-[2vw] items-center justify-center px-[3vmin]' onClick={()=>setShowBtns(false)}>

        {
            btns1.map((e,i)=>{
                return <TextureBtnItem key={i} img={e} cube={active.name}/>
            })
        }
        {
            btns2.map((e,i)=>{
                return <ColorBtnItem key={i} color={e} cube={active.name}/>
            })
        }
    </div>
  )
}

export default memo(TextureBtns)
