import React from 'react';
import { Container, ListItem, Dropdown, DropdownList, ListLink } from './styled';

const NavBar = () => {
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
                <ListLink href="#">Ingresar</ListLink>
            </ListItem>
            <ListItem>
                <ListLink href="#">Ayuda</ListLink>
            </ListItem>
        </Container>
    );
};

export default NavBar;