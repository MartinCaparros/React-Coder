import React, {useState} from 'react';
import { Container, Button, QuantityDiv} from './styled'

const ItemCount = () => {
    const stock = 5;
    const [count, setCount] = useState(0)

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
        <Container>
            <Button onClick={substract}>-</Button>
            <QuantityDiv>{count}</QuantityDiv>
            <Button onClick={add}>+</Button>
        </Container>
    )
};

export default ItemCount