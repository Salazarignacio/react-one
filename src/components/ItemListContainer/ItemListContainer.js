import Card from "./Card/Card";
import "./ItemListContainer.css"


function ItemListContainer (props) {
    return (
<div>
<h2 className="blue">Bienvenid@s! {props.usuario}</h2>
<Card />
</div>
    )
}

export default ItemListContainer;
