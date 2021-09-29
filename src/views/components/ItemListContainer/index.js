import {useEffect,useState} from "react";
import React from 'react';
import ItemList from './ItemsList'
import { useParams } from "react-router";
import { firestore } from "../firebase";

const ItemListContainer = ()=>{

    const {kids,sports,urban} = useParams();
    const [products,setProducts] = useState([]);

    useEffect(()=> {
        

    })



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



export default ItemListContainer;