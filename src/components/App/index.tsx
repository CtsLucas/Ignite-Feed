import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';
import { Main } from '../Main';

import { Container } from './styles';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Container>
        <Sidebar />
        <Main />
      </Container>
    </ThemeProvider>
  );
}
