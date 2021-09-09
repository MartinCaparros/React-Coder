import { Layout, ItemListContainer,ItemDetailContainer } from './views/containers';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={ theme }>
        <BrowserRouter>
    	    <Layout />
            <Switch>
                <Route path="/" component={ItemListContainer}/>
                <Route path="/categoria/:id" component={ItemListContainer}/>
                <Route path="/item" component={ItemDetailContainer}/>
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
