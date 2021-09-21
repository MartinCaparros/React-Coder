import React, {useState} from 'react';
import { Container,QuantityDiv, Divider2 } from './styled';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemCount = ({item, onAdd}) => {
    const [count, setCount] = useState(1)

    const add = () => {
        if (!(count >= item.stock))
        return setCount(count + 1)
    }
    const substract = () => {
        if(count !== 0){
            setCount(count-1)
        }
    }

    return (
        <Container className="m-2">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150"/>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-center">{item.title}</Card.Title>
                    <Card.Text >
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Text>{item.precio}</Card.Text>
                    <Divider2>
                        <Button onClick={substract}>-</Button>
                        <QuantityDiv>{count}</QuantityDiv>
                        <Button onClick={add}>+</Button>
                    </Divider2>
                    <div className="d-flex justify-content-center">
                        <Button onClick={()=>onAdd(count)} variant="primary">Agregar al carrito</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
};

export default ItemCount