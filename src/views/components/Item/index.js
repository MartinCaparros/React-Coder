import React from "react";
import { useHistory } from "react-router";



const Item = ({product}) =>{

    const {push} = useHistory()
    
    return(
            <div className="row justify-content-center m-5">
                <div className="col m-5">
                    <div key={product.id} className="card h-100 mb-2 text-aling-center">
                        <div className="text-center ">
                            <h3 className="m-3">{product.title}</h3>
                        </div>
                        <div className="imagenGuitarra">
                            <img alt="Item" className="card-img-top imagenGuitarra m-4" src={product.img}/>
                        </div>
                        <div className="text-center justify-content-center">
                            <div className="d-flex justify-content-center mt-3">
                            <button onClick={()=> push(`/item/${product.id}`)} className="btn btn-outline-dark m-2">Detalles</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;