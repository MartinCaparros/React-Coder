import React from 'react';
import { Container, ListItem, Dropdown, DropdownList, ListLink } from './styled';
import { CartWidget } from 'views/containers'

const NavBar = ({greeting}) => {
    return (    
        <Container>
            <ListItem>
                <ListLink href="#">Categorias</ListLink>
                <Dropdown>
                    <DropdownList>Mujeres</DropdownList>
                    <DropdownList>Hombres</DropdownList>
                    <DropdownList>Niños</DropdownList>
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