import { TextureLoader } from "three"
import { NearestFilter, RepeatWrapping } from "three"



export const LoadTexture =(img:string)=>{
    const texture = new TextureLoader().load(img);

    texture.magFilter = NearestFilter;
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;

    return texture
}
