import { useState } from "react";

function ItemCount(){
     const [contador, setContador] = useState(0);

     function agregarContador() {
        setContador(contador + 1);
        
     }
     function quitarContador() {
   setContador(contador - 1)
     }
     return(
        <div>
            <p>{contador}</p>
            <button onClick={ agregarContador}>+</button>
            <button onClick={ quitarContador}>-</button>
        </div>
     )
}

export default ItemCount