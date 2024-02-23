import logo from './logo.svg';
import './App.css';
import React from 'react';
import ParteSuperior from './ParteSuperior';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParteInferior from './ParteInferior';

function App() {
  return (
    <div className="App">
      <ParteSuperior />

      <h1> -</h1>
      <ParteInferior />

    </div>
  );
}

export default App;
