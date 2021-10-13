import {React, memo} from "react";
import { Item } from "views/components";
import {Row,Col,Spinner} from 'react-bootstrap';

const ItemList = memo(({products})=>{
    

    return (products.length === 0 ?(
        <div className="col text-center">
            <Spinner animation="border" variant="primary" />
        </div>
    ): (
        <Row>
            {products.map(product=>

                <Col sm={4}>
                    <Item
                        key={product.id}
                        product={product}
                    />
                </Col>
            )}
        </Row>
    ));
}, (oldProps,newProps) => oldProps.products.length === newProps.products.length);



export default ItemList;