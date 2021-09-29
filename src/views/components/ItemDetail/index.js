import  { useContext,React, useState} from "react";
import ItemCount from "../ItemCount"
import { contexto } from "../CartContext";
import { useHistory } from "react-router";

const {push}=useHistory();

export const ItemDetail = ({producto}) =>{
    const [buy, setBuy] = useState(false);
    const {addProduct} = useContext(contexto);

    function onAdd(quantity) {
        setBuy(true)
        addProduct(product,quantity)
    };
        return(product.length === 0 ? (
            <div className="containerCargando"><p>Cargando..</p></div>
        ):(
            <div>
                    <div key={product.id}>
                        <div>
                            <div>
                                <h3>{product.title}</h3>
                            </div>
                            <div>
                                <img alt="Item" className="card-img-top m-4" src={product.img}/>
                            </div>
                        </div>
                        <div >
                            <div>
                            <h5>Descripción:</h5>
                                <p>{product.description}</p>
                                <p className="m-2 lead">Precio: ${product.price}</p>
                            </div>
                            {buy === false ? (<ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                            ):(
                            <div>
                                <div>
                                   <button onClick={()=>{push("/")}} className="btn btn-outline-dark m-2">Seguir comprando</button>
                                </div>
                                <div>
                                    <button onClick={()=>{push("/cart")}} className="btn btn-outline-dark m-2">Finalizar Compra</button>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        ))
};

export default ItemDetail;