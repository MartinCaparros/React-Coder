import React,{useContext,useEffect,useState} from 'react';
import { contexto } from '../CartContext';
import { Container } from './styled.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const CartWidget = () => {

    const {push} = useHistory()

    const {Cart} = useContext(contexto);
    const [countCart,setCountCart] = useState(Cart.length);

    useEffect(()=>{
        let result = Cart.map(a => a.cantidad)
        let total = result.reduce((a, b) => Number(a) + Number(b), 0);
        setCountCart(total)
    },[Cart]);

    if(Cart.length>0){
        return (

            <Container>
                <div><FontAwesomeIcon icon={ faShoppingCart} size="2x" onClick={()=> push("/cart")} />{countCart}</div>
            </Container>

        );
    }else{
        return(<></>)
    }
};

export default CartWidget;