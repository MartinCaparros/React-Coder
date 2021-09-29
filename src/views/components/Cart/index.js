import { React, useContext, useEffect, useState } from "react";
import { contexto } from "../CartContext";
import { firestore } from "firebase";
import { useHistory } from "react-router";

const Cart = () => {

    const {push} = useHistory();
    const {Cart,removeProduct,clear} = useContext(contexto);
    const[cartTotalPrice,setcartTotalPrice] = useState(0);
    const [payment,setPayment] = useState(false);
    const [processing, setProcessing] = useState(false);

    const cartcartTotalPrice = () => {

        let allProducts = 0
        for (const e of Cart){
            allProducts += e.quantity * e.product.price
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
            {collection.doc(product.product.id).update({ 
                stock:(product.product.stock - product.quantity)
            })}
    }
    const GenerateOrders = () => {
        let buyedProducts=[];
        let dia = new Date();
        let date = dia.getDate() + '-' + (dia.getMonth() + 1) + '-' + dia.getFullYear();
        for (const product of Carrito) {
            let quantity = product.quantity
            let model = product.product.title
            let id = product.product.id
            let price = product.product.price
            let it = {id:id,model:title,price:price,quantity:quantity}
            buyedProducts.push(it)
        }

    let order={
        buyer:{nombre:"Martin",email:"martincaparross@gmail.com"},
        product:buyedProducts,
        date:date,
        finalPrice:cartTotalPrice
    }

    UpdateStock()
        const colecction = firestore.collection("pedidos")
        const query = colecction.add(pedido);
        query.then(()=>{
            setProcessing(true)
            clear()
        })
    }
    useEffect(() => {
        cartTotalPrice();
    }, [removeProduct])

    return(
        <>
        {Cart.length === 0 && processing === false? (
                <div className="d-flex aling-items-center justify-content-center cart__Style">
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
                <div className="d-flex justify-content-center">
                    <div >
                        {Cart.map(
                            e =>
                                <div key={e.product.id} >
                                    <div className="">
                                        <p className="mt-5">{e.product.title} (X{e.quantity})</p>
                                    </div>
                                        <div className="">
                                            <button className="btn btn-danger mb-3" onClick={()=>removeProduct(e.product.id)} >Eliminar producto</button>
                                        </div>
                                    </div>
                        )}
                    </div>
                        <div >
                            <p className="mt-2">Total de su compra : $ {totalPrice}</p>
                            <div className="container justify-content-center">
                                <div>
                                    <a className="nav-link"><button onClick={CompraConfirmada} className="button menu__btn1 w-100">Realizar Pago</button></a>
                                </div>
                                <div>
                                    <button onClick={()=>push("/")} className="button menu__btn2  w-100">Ver mas productos</button>
                                </div>
                                <div>
                                    <a className="nav-link"><button className="menu__btn3 button w-100" onClick={()=>clear()}>Limpiar Carro</button></a>
                                </div>
                                <div className="d-flex text-center justify-content-center">
                                    <p className="mx-2">Envío Gratis</p>
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