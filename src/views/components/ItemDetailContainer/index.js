import React,{useState,useEffect} from "react";
import ItemDetail from "../ItemDetail";
import {firestore} from '../../../firebase';
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    
    const{id}=useParams();
    const [productDetail,setProductDetail]=useState({});
    
    useEffect(() =>  {
        const collection = firestore.collection("products");
        const query = collection.get();
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
                        productDetail={productDetail}
                    />
                </div>
        </section>

    );
}
export default ItemDetailContainer;