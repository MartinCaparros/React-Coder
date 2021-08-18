import { Layout } from './views/containers';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={ theme }>
    	<Layout />
    </ThemeProvider>
  );
}

export default App;
