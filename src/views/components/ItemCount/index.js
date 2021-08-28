import React, {useState} from 'react';
import { Container, Button, QuantityDiv, Card, ItemImage, ItemName, Divider } from './styled'

const ItemCount = ({id,title,description,price,pictureUrl}) => {
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
                    <ItemName>{title}</ItemName>
                </Divider>
                <Button onClick={substract}>-</Button>
                <QuantityDiv>{count}</QuantityDiv>
                <Button onClick={add}>+</Button>
            </Card>
        </Container>
    )
};

export default ItemCount