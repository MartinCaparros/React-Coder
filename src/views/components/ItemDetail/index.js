import  { useContext,React, useState} from "react";
import ItemCount from "../ItemCount";
import { contexto } from "../CartContext";
import { useHistory } from "react-router";


export const ItemDetail = ({productDetail}) =>{
    
    const [buy, setBuy] = useState(false);
    const {addProduct} = useContext(contexto);
    const {push}=useHistory();
    
    function onAdd(quantity) {
        setBuy(true)
        addProduct(productDetail,quantity)
    };
        return(productDetail.length === 0 ? (
            <div className="containerCargando"><p>Cargando..</p></div>
        ):(
            <div className="d-flex  w-25">
                    <div key={productDetail.id}>
                        <div>
                            <div>
                                <h3 className=" mt-1 text-center">{productDetail.title}</h3>
                            </div>
                            <div>
                                <img alt="Item" className="card-img-top m-4" src={productDetail.img}/>
                            </div>
                        </div>
                        <div >
                            <div>
                            <h5>Descripción:</h5>
                                <p>{productDetail.description}</p>
                                <p className="m-2 lead">Precio: ${productDetail.price}</p>
                            </div>
                            {buy === false ? (<ItemCount initial={1} stock={productDetail.stock} onAdd={onAdd}/>
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