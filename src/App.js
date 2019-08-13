import React from 'react';
import NavBar from './components/navbar/NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Search from './components/search/Search'
import './App.css';

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
