import './CartWidget.css';

function CartWidget (){

  const alerta = () => { alert("Hola")}
    return (


        <div> <button onClick={alerta} type="button" class="btn btn-primary" data-bs-toggle="modal" id="mcarrito" data-bs-target="#exampleModal">
        <img src="./charro.png" className="charro" alt="carrito"></img>
      </button> </div>
    )
}

export default CartWidget