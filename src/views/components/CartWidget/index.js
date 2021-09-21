import React from 'react';
import { Container } from './styled.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (

        <Container>
            <FontAwesomeIcon icon={ faShoppingCart} />
        </Container>

    );
};

export default CartWidget;