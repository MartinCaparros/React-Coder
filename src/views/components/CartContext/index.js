import {createContext, React , useState } from "react";

export const contexto = createContext();
const {Provider} = contexto;

const CustomProvider = ({children}) => {

    const [Cart,setCart] = useState([])
    const addProduct = (product,quantity) => {

        console.log(Cart)
        let exist = Cart.find( i => i.producto.title === product.title)
        if(exist !== undefined){
            for (const a of Cart) {
                if(a.producto.title === product.title){
                    a.quantity += quantity
                }
            }
        }else{
            let selectedProducts = {"producto":product,"cantidad":quantity}
            setCart(Cart => [...Cart, selectedProducts])
        }
    }

    const removeProduct = (id) => {
        let product = Cart.filter( i => i.producto.id !== id)
        setCart(product)
    }
    const clear = () => setCart([])

    const contexto = {
        Cart,
        addProduct,
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