import React from 'react';
import { Cart, ItemDetailContainer,ItemListContainer } from 'views/components';
import { Container } from './styled';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import { Header } from '..';
import {Row} from 'react-bootstrap';


const Layout = () => {

    return (
        <BrowserRouter>
            <Container>
                <Header/>
                <section>
                    <Row>
                        <Switch>
                            <Route exact path="/" component={ItemListContainer}/>
                            <Route exact path="/products/:kids" component={ItemListContainer}/>
                            <Route exact path="/products/:sports" component={ItemListContainer}/>
                            <Route exact path="/products/:urban" component={ItemListContainer}/>
                            <Route exact path="/item/:id" component={ItemDetailContainer}/>
                            <Route exact path="/cart" component={Cart} />
                        </Switch>
                    </Row>
                </section>
            </Container>
        </BrowserRouter>
    )
}

export default Layout