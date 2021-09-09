import { Container} from './styled';
import  { NavBar }  from 'views/containers';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <Container>
            <Link to="/"><h1>Home</h1></Link>
            <NavBar greeting="Usuario">
            </NavBar>
        </Container>
    )
}

export default Header;

