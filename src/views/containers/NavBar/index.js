import React from 'react';
import { Container, ListItem, Dropdown, DropdownList, ListLink } from './styled';
import { CartWidget } from 'views/containers'
import { Link } from 'react-router-dom';

const NavBar = ({greeting}) => {
    return (    
        <Container>
            <ListItem>
                <ListLink href="#">Categorias</ListLink>
                <Dropdown>
                    <DropdownList><Link to="/">Detalle de item</Link></DropdownList>
                    <DropdownList><Link to="/item">Listado de items</Link></DropdownList>
                </Dropdown>
            </ListItem>
            <ListItem>
                <ListLink href="#">{greeting}</ListLink>
            </ListItem>
            <ListItem>
                <ListLink href="#">Ayuda</ListLink>
            </ListItem>
            <CartWidget></CartWidget>
        </Container>
    );
};

export default NavBar;