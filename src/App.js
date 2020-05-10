import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Table from './components/Table';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Header />
        <Nav/>
        <Table />
      </Wrapper>
    </div>
  );
}

export default App;
