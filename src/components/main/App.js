import React from 'react';
import './App.css';
import NumberColumn from '../NumberColumn/NumberColumn';
import MainContainer from './MainContainer';

function App() {
  return (
    <React.Fragment>
        <NumberColumn />
        <MainContainer />
    </ React.Fragment>
  );
}

export default App;
