import React,{useEffect,useState} from "react";
import { ItemList } from 'views/components';
import { useParams } from "react-router";
import { firestore } from "../../../firebase";
import { Spinner } from "react-bootstrap";

const ItemListContainer = ()=>{

    const {kids,sports,urban} = useParams();
    const [products,setProducts] = useState([]);

    useEffect(()=> {
        const collection = firestore.collection("products");
        if(sports){
            const query = collection.where("sports","==",true).get();
            query
            .then((snapshot)=>{
                const docs = snapshot.docs;
                const products = [];
                docs.forEach((doc)=>{
                    const docSnapshot = doc
                    let product = {...docSnapshot.data(),id:docSnapshot.id}
                    products.push(product)
                });
                setProducts(products);
            })
        }else if(urban){
            const query = collection.where("category","==","urban").get();
                query
                    .then((snapshot)=>{
                    const docs = snapshot.docs;
                    const products = [];
                    docs.forEach((doc)=>{
                        const docSnapshot = doc;
                        let product = {...docSnapshot.data(),id:docSnapshot.id};
                        products.push(product);
                    })
                    setProducts(products);
                })
        }else if(kids){
            const query = collection.where("category","==","kids").get();
                query
                    .then((snapshot)=>{
                    const docs = snapshot.docs;
                    const products = [];
                    docs.forEach((doc)=>{
                        const docSnapshot = doc;
                        let product = {...docSnapshot.data(),id:docSnapshot.id};
                        products.push(product);
                    })
                    setProducts(products);
                })
        }else {
            const query = collection.get();
            query
                .then((snapshot)=>{
                const docs = snapshot.docs
                const products = []
                docs.forEach((doc)=>{
                    const docSnapshot = doc
                    let product = {...docSnapshot.data(),id:docSnapshot.id}
                    products.push(product)
                });
                setProducts(products);
                });
        }
    },[urban,kids,sports]);



    return (products.length===0 ?(
        <div className="col text-center">
            <Spinner animation="border" variant="primary" />
        </div>
    ): (
        <ItemList
            products={products}
        />
    ));
};



export default ItemListContainer;