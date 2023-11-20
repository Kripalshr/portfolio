import React, {useEffect, useRef} from 'react';
import planeScene from '../assets/3d/plane.glb'
import {useAnimations, useGLTF} from "@react-three/drei";

const Plane = ({isrotating, ...props}) => {
    const ref= useRef();
    const {scene, animations} = useGLTF(planeScene);
    const {actions} = useAnimations(animations, scene);

    useEffect(() => {
        if (isrotating){
            actions['Take 001'].play();
        } else {
            actions['Take 001'].stop();
        }

    },[actions, isrotating]);
    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Plane;