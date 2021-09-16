import React from 'react';
// import { Container, ListItem, Dropdown, DropdownList, ListLink } from './styled';
import { CartWidget } from 'views/containers'
import { useHistory} from 'react-router-dom';
import  { Navbar,Nav,NavDropdown,Form,FormControl,Button }  from 'react-bootstrap';



const NavBar = ({greeting}) => {

    const {push} = useHistory();



    return (    
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            {/* <NavbarToggle aria-controls="navbarScroll" /> */}
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Categoría 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Categoría 2</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;

// <DropdownList onClick={() => push("/item")}>Detalle de item</DropdownList>
// <DropdownList onClick={() => push("/")}>Listado de items</DropdownList>