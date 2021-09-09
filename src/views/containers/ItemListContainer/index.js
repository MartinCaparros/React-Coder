import {React, useState,useEffect} from "react";
import { useParams } from "react-router";
import { ItemCount } from "views/components";
import { Container } from "./styled";

const ItemListContainer = () => {

    const {id}= useParams()

    const [productos,setProductos]=useState([])

    useEffect(
        () => {
            setTimeout(()=>{
                setProductos([
                    {id:2, title:"Zapatilla Nike", description:"Running shoe for professional", price:16500, pictureUrl:"" },
                    {id:3, title:"Zapatilla UnderArmor", description:"Running shoe for professional", price:16500, pictureUrl:"" },
                    {id:4, title:"Zapatilla Adidas", description:"Running shoe for professional", price:16500, pictureUrl:"" },
                    {id:5, title:"Zapatilla Puma", description:"Running shoe for professional", price:16500, pictureUrl:"" }])
            }, 2000)
        },[]
    )

    return (  
        <Container>
            {productos.map(item=>
                <ItemCount
                    item={item}
                />
            )}
        </Container>

    );
}

export default ItemListContainer;