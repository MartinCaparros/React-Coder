import React from "react";
import { useHistory } from "react-router";
import { Card, Button} from 'react-bootstrap';



const Item = ({product}) =>{
    
    const {push} = useHistory()
    
    return(
        <Card style={{ width: '13rem' }}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Button variant="primary" onClick={()=> push(`/item/${product.id}`)}>Detalles</Button>
            </Card.Body>
      </Card>
    )
}

export default Item;