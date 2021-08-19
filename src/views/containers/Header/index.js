import { Container} from './styled';
import  { NavBar }  from 'views/containers';
import React from 'react';

const Header = () => {
    return(
        <Container>
            <NavBar greeting="Usuario">

            </NavBar>
        </Container>
    )
}

export default Header;

