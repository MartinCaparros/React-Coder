import React,{useState,useEffect,useContext} from "react";
import { useHistory} from 'react-router-dom';
import { ItemCount } from "views/components";
import { contexto } from "./CartContext";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    
    const {id} = useParams({})

    const[item, setItem] = useState({})
    const {push} = useHistory()
    const [compra, setCompra] = useState(false)

    const {addProducto} = useContext(contexto);

    function onAdd(cantidad) {
        setCompra(true)
        addProducto(item,cantidad)
    }

    useEffect(() =>{
        const getItem = () => {
            
            setTimeout(()=>{
                let item
                if(id) {
                    item = 
                }
                setItem(item)
            }, 2000)
        }
        getItem()
    },[id])

    return (item.length===0 ? (
        <div>
            <p>Cargando...</p>
        </div>
    ) : (
            <div className="text-center justify-content-center">
                {compra === false ? (<ItemCount item={item} onAdd={onAdd} />):
                <div className="">
                    <button onClick={() => push("/cart")} className="btn btn-outline-dark m-2" >Finalizar Compra</button>
                </div> }
            </div>
            
    ));
}
 
export default ItemDetailContainer;