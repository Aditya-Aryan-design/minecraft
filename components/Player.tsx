import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { useKeyBoard } from "@/hooks/useKeyboard";

const Jump_Force = 5;
const Speed = 1;



function Player() {
    const actions = useKeyBoard()
    const { camera } = useThree();

    const [ref, api]: any = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0, 1, 0]
    }))


    // movement vectors
    const direction = new Vector3();
    const frontVector = new Vector3(
        0, 0, (actions.moveBackward ? 1 : 0) - (actions.moveForward ? 1 : 0)
    )
    const sideVector = new Vector3(
        (actions.moveLeft ? 1 : 0) - (actions.moveRight ? 1 : 0), 0, 0
    )


    const vel = useRef([0, 0, 0])

    // Jump logic
    if(actions.jump && Math.abs(vel.current[1]) < 0.003){
        api.velocity.set(0,Jump_Force,0)
    }




    useEffect(() => {
        api.velocity.subscribe((v: any) => vel.current = v)
    }, [api.velocity])


    const pos = useRef([0, 0, 0])
    useEffect(() => {
        api.position.subscribe((p: any) => pos.current = p)
    }, [api.position])

    useFrame(() => {

        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]));






        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(Speed)
            .applyEuler(camera.rotation)

        api.velocity.set(direction.x, vel.current[1], direction.z)
    })








    return (
        <mesh ref={ref}>

        </mesh>
    )
}

export default Player
