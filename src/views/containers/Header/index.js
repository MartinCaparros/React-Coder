import { Container} from './styled';
import  { NavBar }  from 'views/containers';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {

    const {push} = useHistory()

    return(
        <Container>
            <NavBar greeting="Usuario">
                <h1 onClick={()=>push("/asd")}>Home</h1>
            </NavBar>
        </Container>
    )
}

export default Header;

