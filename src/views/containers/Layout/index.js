import { Container } from './styled';
import React from 'react';
import {
    MainSection,
    Header
} from 'views/containers';

const Layout = () => {
    return ( 
        <div>
            <Header/>
            <Container>
            </Container>
            <MainSection/>
        </div>       
    );
}
 
export default Layout;