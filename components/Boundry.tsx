import BoundryWall from "./BoundryWall"

const Boundry = () => {

    


  return (

    <>

    <BoundryWall pos={[50,0,0]} rot={[0,-Math.PI/2,0]}/>
    <BoundryWall pos={[0,0,-50]} rot={[0,0,0]}/>
    <BoundryWall pos={[0,0,50]} rot={[0,Math.PI,0]}/>
    <BoundryWall pos={[-50,0,0]} rot={[0,Math.PI/2,0]}/>
    
    
    </>
  )
}

export default Boundry