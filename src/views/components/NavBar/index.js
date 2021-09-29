import React from 'react';
import { CartWidget } from 'views/components';
import { useHistory} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup  from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



const NavBar = ({greeting}) => {

    const {push} = useHistory();

    return (    
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto align-items-center">
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Escribí tu búsqueda aquí"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                        Button
                        </Button>
                    </InputGroup>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => push("/products/:kids")}>Kids</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => push("/products/:sports")}>Deportivos</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => push("/products/:urban")}>Urbanos</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>
                        Usuario
                    </Nav.Link>
                    <Nav.Link>
                        Nosotros
                    </Nav.Link>
                    <li>
                        <CartWidget onClick={()=> push("/cart")}></CartWidget>
                    </li>
                </Nav>
                </Navbar.Collapse>
            </Container>
            <Container></Container>
        </Navbar>
    );
};

export default NavBar;
