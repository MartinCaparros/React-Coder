import {createContext, React , useState } from "react";

export const contexto = createContext();
const {Provider} = contexto;

const CustomProvider = ({children}) => {
    const [Cart,setCart] = useState([])

    function addProducto(product,quantity){
        let exist = Cart.find( i => i.producto.id === producto.id)
        if(exist !== undefined){
            for (const a of Cart) {
                if(a.product.id === product.id){
                    a.quantity += quantity
                }
            }
        }else{
            let selectedProducts = {"producto":product,"cantidad":quantity}
            setCart(Cart => [...Cart, selectedProducts])
        }
    }

    const removeProduct = (id) => {
        let product = Cart.filter( i => i.product.id !== id)
        setCart(product)
    }
    const clear = () => setCart([])

    const contexto = {
        Cart,
        addProducto,
        removeProduct,
        clear
    }

    return(
        <div>
            <Provider value={contexto}>
                {children}
            </Provider>
        </div>
    )
}

export default CustomProvider;