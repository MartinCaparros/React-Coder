import { React, useContext, useEffect, useState } from "react";
import { contexto } from "../CartContext";
import { firestore } from "../../../firebase";
import { useHistory } from "react-router";

const Cart = () => {

    const {push} = useHistory();
    const {Cart,removeProduct,clear} = useContext(contexto);
    const[cartTotalPrice,setcartTotalPrice] = useState(0);
    const [payment,setPayment] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [clientName,setClientName] = useState("")
    const [clientEmail,setClientEmail] = useState("")
    const [clientPhoneNumber,setClientPhoneNumber] = useState("")
    

    const cartTotal = () => {

        let allProducts = 0
        for (const e of Cart){
            allProducts += e.cantidad * e.producto.price
        }
        setcartTotalPrice(allProducts)
    }

    const CompraConfirmada = () =>{
        setPayment(true)
        GenerateOrders()
    }
    const UpdateStock = () => {
        const collection = firestore.collection("products") 
        for (const product of Cart) 
            {collection.doc(product.producto.id).update({ 
                stock:(product.producto.stock - product.cantidad)
            })}
    }
    const GenerateOrders = () => {
        let buyedProducts=[];
        let dia = new Date();
        let date = dia.getDate() + '-' + (dia.getMonth() + 1) + '-' + dia.getFullYear();
        for (const product of Cart) {
            let quantity = product.cantidad
            let title = product.producto.title
            let id = product.producto.id
            let price = product.producto.price
            let it = {id:id,model:title,price:price,quantity:quantity}
            buyedProducts.push(it)
        }

        let order={
            buyer:clientName,
            buyersPhone:clientPhoneNumber,
            buyersEmails:clientEmail,
            product:buyedProducts,
            date:date,
            finalPrice:cartTotalPrice
        }

        
        UpdateStock()
            const colecction = firestore.collection("pedidos")
            const query = colecction.add(order);
            query.then(()=>{
                setProcessing(true)
                clear()
            })
    }
        const handleClientName= (e) =>{
            setClientName(e.target.value)
        }
        const handleClientEmail= (e) =>{
            setClientEmail(e.target.value)
        }
        const handleClientPhoneNumber= (e) =>{
            setClientPhoneNumber(e.target.value)
        }
    useEffect(() => {
        cartTotal();
    }, [removeProduct])

    return(
        <>
        {Cart.length === 0 && processing === false? (
                <div className="d-flex aling-items-center justify-content-center">
                    <p>No hay Producto en el carrito</p><button onClick={()=>push("/")}>Volver a la tienda</button>
                </div>
        ):(
            <div>
                {payment === false ? "":(
                <div>
                    {processing === false?(
                        <div>
                            <p>Procesando Pago</p>
                        </div>
                    ):(
                        <div>
                            <p>Pago Realizado</p>
                        </div>
                    )}
                </div>
            )}
            {payment === false ?(
                <div>
                <div className="d-flex justify-content-center">
                    {Cart.map(
                        e =>
                            <div className="m-1" key={e.producto.id}>
                                <div className="">
                                    <img className=" mt-3" alt="Imagen" src={e.producto.img} />
                                </div>
                                <div className="">
                                    <p className="mt-5">{e.producto.title}(x{e.cantidad})</p>
                                </div>
                                    <div className="">
                                        <button className="btn btn-primary" onClick={()=>removeProduct(e.producto.id)} >Eliminar producto</button>
                                    </div>
                                </div>
                    )}
                </div>
                <div className="d-flex justify-content-center" >
                    <div>
                        <form className="d-flex flex-column justify-content-center " onSubmit={(e)=>e.preventDefault()}>
                            <div className="p-2">
                                <label className="me-1">Nombre y Apellido</label>
                                <input onChange={handleClientName} type="text" placeholder="Nombre y Apellido" />
                            </div>
                            <div className="p-2">
                                <label className="me-1">Email</label>
                                <input onChange={handleClientEmail} type="email" placeholder="Email" />
                            </div>
                            <div className="p-2" >
                                <label className="me-1">Telefono</label>
                                <input onChange={handleClientPhoneNumber} type="tel" placeholder="Telefono"/>
                            </div>
                        </form>
                        <a className="nav-link" href="/#"><button onClick={CompraConfirmada} className="btn btn-primary">Confirmar Pedido</button></a>
                    </div>
                    <div className=" d-flex flex-row" >
                        <p >Total de su compra: </p><b>${cartTotalPrice}</b>
                    </div>
                </div>
                <div className="d-flex ">
                        <div className="d-flex container justify-content-center">
                            <div>
                                <a href="/#" className="nav-link" ><button className="btn btn-primary" onClick={()=>push("/")} >Ver mas productos</button></a>
                            </div>
                            <div>
                                <a href="/#" className="nav-link"><button className="btn btn-primary" onClick={()=>clear()}>Limpiar Carrito</button></a>
                            </div>
                        </div>
                </div>
            </div>
            ):("")}
        </div>
        )}
        </>
    )
}


export default Cart;