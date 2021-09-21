import  { NavBar }  from 'views/components';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {

    const {push} = useHistory()

    return(
        <NavBar greeting="Usuario">
            <h1 onClick={()=>push("/asd")}>Home</h1>
        </NavBar>
    )
}

export default Header;

