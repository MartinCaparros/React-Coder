import { Layout } from './views/components';
import { ThemeProvider } from 'styled-components';
import {CustomProvider} from './views/components';
import theme from './theme';


function App() {
  return (
    <CustomProvider>
        <ThemeProvider theme={ theme }>

            <Layout>

            </Layout>

        </ThemeProvider>
    </CustomProvider>
  );
}

export default App;
