import React from 'react';
import { ItemDetailContainer,ItemListContainer } from '..';
import { Container, Content} from './styled';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import { Header } from '..';


const Layout = () => {

    return (
        <BrowserRouter>
            <Container>
                <Header/>
                <Content>
                    <Switch>
                        <Route exact path="/" component={ItemListContainer}/>
                        <Route exact path="/categoria/:id" component={ItemListContainer}/>
                        <Route exact path="/item" component={ItemDetailContainer}/>
                    </Switch>
                </Content>
            </Container>
        </BrowserRouter>
    )
}

export default Layout