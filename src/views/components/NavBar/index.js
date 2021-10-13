import React from 'react';
import { CartWidget } from 'views/components';
import { useHistory} from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavDropdown,
    Container
} from 'react-bootstrap';



const NavigationBar = () => {

    const {push} = useHistory();

    return (    
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand onClick={()=>push("/")}>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto align-items-center">
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => push("/products/:kids")}>Kids</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => push("/products/:sports")}>Deportivos</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => push("/products/:urban")}>Urbanos</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>
                        Usuario
                    </Nav.Link>
                    <li>
                        <CartWidget>
                        </CartWidget>
                    </li>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
