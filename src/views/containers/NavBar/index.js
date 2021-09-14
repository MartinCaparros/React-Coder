import React from 'react';
import { Container, ListItem, Dropdown, DropdownList, ListLink } from './styled';
import { CartWidget } from 'views/containers'
import { useHistory} from 'react-router-dom';

const NavBar = ({greeting}) => {

    const {push} = useHistory();



    return (    
        <Container>
            <ListItem>
                <ListLink href="#">Categorias</ListLink>
                <Dropdown>
                    <DropdownList onClick={() => push("/item")}>Detalle de item</DropdownList>
                    <DropdownList onClick={() => push("/")}>Listado de items</DropdownList>
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