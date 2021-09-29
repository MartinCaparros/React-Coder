import {React, memo} from "react";
import { Item } from "views/components";

const ItemList = memo(({product})=>{

    return (product.length===0 ?(
        <div className="col text-center">
            <p>Cargando...</p>
        </div>
    ): (  
        <Container>
            {product.map(item=>
                <div key={product.id}>
                    <Item
                        product={product}
                    />
                </div>
            )}
        </Container>

    ));
}, (oldProps,newProps) => oldProps.producto.length === newProps.producto.length);



export default ItemList;