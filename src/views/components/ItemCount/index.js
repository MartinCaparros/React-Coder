import React, {useState} from 'react';
import { Container,QuantityDiv, Divider2 } from './styled';
import {Button} from 'react-bootstrap';

const ItemCount = ({stock,initial, onAdd}) => {
    const [count, setCount] = useState(1)

    const add = () => {
        if (!(count >= stock))
        return setCount(count + 1)
    }
    const substract = () => {
        if(count !== 0){
            setCount(count-1)
        }
    }

    return (
        <Container className="m-2">
                    <Divider2>
                        <Button onClick={substract}>-</Button>
                        <QuantityDiv>{count}</QuantityDiv>
                        <Button onClick={add}>+</Button>
                    </Divider2>
                    <div className="d-flex justify-content-center">
                        <Button onClick={()=>onAdd(count)} variant="primary">Agregar al carrito</Button>
                    </div>
        </Container>
    )
};

export default ItemCount