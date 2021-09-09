import React from 'react';
import { ItemDetailContainer,ItemListContainer } from '..';
import { Container} from './styled';
import { BrowserRouter,Switch,Route } from 'react-router-dom';


const MainSection = () => {

    return (
        <Container>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={ItemListContainer} exact/>
                    <Route path="/categoria/:id" component={ItemListContainer}/>
                    <Route path="/item" component={ItemDetailContainer}/>
                </Switch>
            </BrowserRouter>
        </Container>
    )
}

export default MainSection