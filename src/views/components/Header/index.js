import  { NavigationBar }  from 'views/components';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {

    const {push} = useHistory()

    return(
        <NavigationBar greeting="Usuario">
            <h1 onClick={()=>push("/")}>Home</h1>
        </NavigationBar>
    )
}

export default Header;

