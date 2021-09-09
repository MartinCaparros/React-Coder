import React, {useState} from 'react';
import { Container, Button, QuantityDiv, Card, ItemImage, ItemName, Divider, Divider2 } from './styled'

const ItemCount = ({item}) => {
    let stock = 15;
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
            <Card>
                <ItemImage/>
                <Divider>
                    <ItemName>{item.title}</ItemName>
                </Divider>
                <Divider2>
                    <Button onClick={substract}>-</Button>
                    <QuantityDiv>{count}</QuantityDiv>
                    <Button onClick={add}>+</Button>
                </Divider2>
            </Card>
        </Container>
    )
};

export default ItemCount