import {useGLTF} from '@react-three/drei';
import { useMemo } from 'react';

export function PorscheModel(){
    const {scene} = useGLTF('/porsche.glb');
    const clonedScene=useMemo(() => scene.clone(),[scene]);


    return(
        <primitive 
        object={clonedScene}
        scale={0.05}
        position={[0,-1,0]}   
        />
    )


}
useGLTF.preload('/porsche.glb')