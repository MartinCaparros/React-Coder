import React,{useState,useEffect,useContext} from "react";
import ItemDetail from "../ItemDetail";
import {firestore} from 'firebase';
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    
    const{id}=useParams();
    const [productDetail,setProductDetail]=useState();
    
    useEffect(() =>  {
        const coleccion = firestore.collection("products");
        const query = coleccion.get();
            query
                .then((snapshot)=>{
                snapshot.forEach(doc => {
                    if (doc.id === id) {
                        setProductDetail(doc.data())
                    };
                });
            });
    },[id])

    return (

        <section className="container d-flex justify-content-center">
                <div className="row justify-content-center">
                    < ItemDetail 
                    product={productDetail}
                    />
                </div>
        </section>

    );
}
 
export default ItemDetailContainer;