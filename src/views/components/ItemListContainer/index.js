import {React, useState,useEffect} from "react";
import { useParams } from "react-router";
import { Item } from "views/components";
import { Container } from "./styled";
import { firestore } from "firebase";

const ItemListContainer = () => {

    const {id}= useParams()

    const [productos,setProductos]=useState([])

    useEffect(
        () => {
            const db = firestore();
            const productsCollection = firestore.collection("products");
            const queryRequest = productsCollection.get();
            queryRequest
            .then((snapshot) => {
                const docs = snapshot.docs()
                const products = []
                docs.forEach((product) =>{

                    const productSnapshot = product
                    const productsData = {... productSnapshot.data(), id: productSnapshot.id }
                    products.push(productsData)
                })
            })
            .catch((error)=> {
                console.log(error)
            })

        },[id]
    )

    return (productos.length===0 ?(
        <div className="col text-center">
            <p>Cargando...</p>
        </div>
    ): (  
        <Container>
            {productos.map(item=>
                <Item
                    item={item}
                />
            )}
        </Container>

    ));
}

export default ItemListContainer;