import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import theme from '../components/themes/default';
import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
