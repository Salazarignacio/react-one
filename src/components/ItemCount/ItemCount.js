import { useState } from "react";

function ItemCount(){
     const contador = useState(0);

     function agregarContador() {
        contador[1](contador[0] + 1);
        console.log(contador)
     }
     function quitarContador() {
        contador[1](contador[0] - 1);
        console.log(contador)
     }
     return(
        <div>
            <p>{contador[0]}</p>
            <button onClick={ agregarContador}>+</button>
            <button onClick={ quitarContador}>-</button>
        </div>
     )
}

export default ItemCount