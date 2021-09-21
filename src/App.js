import { Layout } from './views/components';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
function App() {
  return (
    <ThemeProvider theme={ theme }>

      <Layout>

      </Layout>

    </ThemeProvider>
  );
}

export default App;
