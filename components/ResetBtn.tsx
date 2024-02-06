import { useAppDispatch } from "@/redex/hooks"
import { resetWorld } from "@/redex/slices/worldState"

const ResetBtn = () => {

  const dispatch = useAppDispatch()


  const handleReset = ()=>{
    const conf = confirm("Do You want to reset?")

    if(conf){
      dispatch(resetWorld())
    }
  }

  return (
    <button className='button Trans absolute top-[3vh] right-[5vw] text-[5vmin] font-bold z-50 text-white' onClick={handleReset}>↺</button>
  )
}

export default ResetBtn
