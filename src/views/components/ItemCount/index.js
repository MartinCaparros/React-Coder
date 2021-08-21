import React, {useState} from 'react';
import { Container, Button, QuantityDiv} from './styled'

const ItemCount = () => {

    const [count, setCount] = useState(0)

    const add = () => {
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