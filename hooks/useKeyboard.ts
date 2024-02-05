import { useCallback, useEffect, useState } from "react"


type actionByKeyProp = ("ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight" | "Space" | "Digit1" | "Digit2" | "Digit3" | "Digit4" | "Digit5")


const actionByKey =(key:actionByKeyProp)=>{
    const keyActionMap = {
        ArrowUp: 'moveForward',
        ArrowDown: 'moveBackward',
        ArrowLeft: 'moveLeft',
        ArrowRight: 'moveRight',
        Space: 'jump',
        Digit1: 'dirt',
        Digit2: 'glass',
        Digit3: 'grass',
        Digit4: 'wall',
        Digit5: 'wood',
    }

    return keyActionMap[key]
}



export const useKeyBoard = ()=>{
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveRight: false,
        moveLeft: false,
        jump: false,
        texture1: false,
        texture2: false,
        texture3: false,
        texture4: false,
        texture5: false,
    })

    const handleKeyDown = useCallback((e:any)=>{

        const action = actionByKey(e.code)
        if(action){
            
            
            setActions((prev)=>{
                return ({
                    ...prev,
                    [action]:true
                })
            })
        }
    },[])

    const handleKeyUp = useCallback((e:any)=>{

        
        const action = actionByKey(e.code)
        if(action){
            setActions((prev)=>{
                return ({
                    ...prev,
                    [action]:false
                })
            })
        }
    },[])


    useEffect(()=>{
        if(typeof window !== undefined){
            document.addEventListener("keydown",handleKeyDown);
            document.addEventListener("keyup",handleKeyUp);
    
            return ()=>{
                document.removeEventListener("keydown",handleKeyDown);
                document.removeEventListener("keyup",handleKeyUp)
            }
        }
        
        
    },[handleKeyDown,handleKeyUp])

    return actions
}

