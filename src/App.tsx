import './App.css';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material';
import React from 'react';
import MainPage from './pages/MainPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#131418',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
