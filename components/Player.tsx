import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useEffect, useRef, useCallback, memo } from "react";
import { Vector3 } from "three";
import { useAppSelector,useAppDispatch } from "@/redex/hooks";
import { prevstate } from "@/redex/slices/playerState";




const Jump_Force = 5;
const Speed = 1;



function Player() {
    const { camera } = useThree();
    const playerAction = useAppSelector(state=>state.player.value)

    const dispatch = useAppDispatch()


    const direction = new Vector3();
    const frontVector = new Vector3(
        0, 0, (playerAction === "moveBackward" ? 1 : 0) - (playerAction === "moveForward" ? 1 : 0)
    )
    const sideVector = new Vector3(
        (playerAction === "moveLeft" ? 1 : 0) - (playerAction === "moveRight" ? 1 : 0), 0, 0
    )

    const [ref, api]: any = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0, 1, 0]
    }))


    
    
    const vel = useRef([0, 0, 0])
    
    
    
    const positionCallBack = useCallback(()=>api.position.subscribe((p: any) => pos.current = p),[api.position])
    const velocityCallBack = useCallback(()=>api.velocity.subscribe((v: any) => vel.current = v),[api.velocity])



    useEffect(() => {
        velocityCallBack()
    }, [api.velocity])


    const pos = useRef([0, 0, 0])
    useEffect(() => {
        positionCallBack()
    }, [api.position])



    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]));



        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(Speed)
            .applyEuler(camera.rotation)

        api.velocity.set(direction.x, vel.current[1], direction.z)

        if(playerAction === "jump" && Math.abs(vel.current[1])<0.001){
            api.velocity.set(0,Jump_Force,0);
            dispatch(prevstate())
        }
        
    })

     







    return (
        <mesh ref={ref}>

        </mesh>
    )
}

export default memo(Player)
