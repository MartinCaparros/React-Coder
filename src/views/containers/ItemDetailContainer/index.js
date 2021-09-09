import React,{useState,useEffect} from "react";
import { ItemCount } from "views/components";

const ItemDetailContainer = () => {

    const[item, setItem] = useState({})

    useEffect(() =>{
        setTimeout(()=>{
            setItem({ id:1, title:"Zapatilla Adidas", description:"Running shoe for professional", price:16500, pictureUrl:"" })
        }, 2000)
    },[])

    return ( 
        <div>
            <ItemCount
                item={item}
            />
        </div>
     );
}
 
export default ItemDetailContainer;