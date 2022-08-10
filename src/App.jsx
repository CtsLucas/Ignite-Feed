import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import { Header } from './components/Header';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}
